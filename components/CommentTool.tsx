import { API, ToolConfig } from "@editorjs/editorjs/types"; // Added import to support typescript
import CSS from './CSS.escape'; // Added import for CSS escaping

enum CommentId {
  CommentBlockId = "commentBlockId",
  BlockId = "blockid",
  ContainerId = "comment-container-id",
}

enum CommentClasses {
  Active = "comment-show-active",
}

export interface CommentBlockData {
  id: string;
  count: number;
}

export interface RenderBody {
  commentBlockId: string | null;
  blockId: string | null;
  onClose: () => void;
  addCommentBlockData: (data: CommentBlockData) => void;
  removeBlockComments: () => void;
}

export interface CommentConfig {
  markerColor?: string;
  activeColor?: string;
  editorjsId?: string;
  renderBody: ({
    commentBlockId,
    blockId,
    addCommentBlockData,
    onClose,
    removeBlockComments,
  }: RenderBody) => HTMLElement | any;
}

export default class Comment {
  commentBlockId: string | null = null;
  markerColor?: string;
  activeColor?: string;
  editorJsId: string = "editorjs";
  iconClasses: {
    base: string;
    active: string;
  };
  public api: API;
  public button: HTMLElement | null = null;
  public renderBody: ({
    commentBlockId,
    blockId,
    onClose,
    addCommentBlockData,
  }: RenderBody) => HTMLElement | null | any;

  public tag: string = "MARK";
  range: Range | null = null;

  constructor({
    api,
    config,
  }: {
    api: API;
    config?: ToolConfig<CommentConfig>;
  }) {
    this.api = api;
    this.renderBody = () => null;
    this.markerColor = config?.markerColor;
    this.activeColor = config?.activeColor;
    this.commentBlockId = null;
    if (config?.editorjsId) {
      this.editorJsId = config.editorjsId;
    }

    if (!config || config.renderBody === null) {
      console.log("No render component was added in the config");
    }

    if (config && config.renderBody !== null) {
      this.renderBody = config.renderBody;
    }

    this.activeOnClick();
    this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive,
    };
  }

  static get isInline() {
    return true;
  }

  render() {
    console.log("1st ");
    this.button = document.createElement("button");
    this.button.classList.add(this.iconClasses.base);
    this.button.innerHTML = `<?xml version="1.0" ?><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"/></svg>`;

    const Container = document.createElement("div");

    Container.appendChild(this.button);

    this.button.addEventListener("click", () => {
      this.renderCommentComponent();
    });

    return Container;
  }

  onClose() {
    console.log("close comment section");
    this.hideCommentComponent();
  }

  renderActions() {
    this.hideCommentComponent();
    const commentContainer = document.createElement("div");
    commentContainer.hidden = true;
    return commentContainer;
  }

  surround(range: Range) {
    if (!range) {
      return;
    }

    this.range = range;
  }

  customSurround() {
    let termWrapper = this.api.selection.findParentTag(this.tag, Comment.CSS);

    if (termWrapper) {
      this.unwrap(termWrapper);
    } else {
      if (this.range) this.wrap(this.range);
    }
  }

  wrap(range: Range) {
    let marker = document.createElement(this.tag);
    marker.setAttribute(
      CommentId.CommentBlockId,
      this.commentBlockId as string
    );
    marker.setAttribute(CommentId.BlockId, this.blockId as string);
    marker.classList.add(Comment.CSS);

    marker.onclick = () => {
      this.hideCommentComponent();
      this.setCommentBlockId(marker);
      this.renderCommentComponent();
    };

    marker.appendChild(range.extractContents());
    marker.classList.add(Comment.CSS);

    range.insertNode(marker);

    this.api.selection.expandToTag(marker);
  }

  unwrap(termWrapper: HTMLElement) {
    console.log("Unwrapping method called");
    this.api.selection.expandToTag(termWrapper);

    let sel = window.getSelection();
    if (!sel) {
        console.log("error on selection ");
      return;
    }
    if (sel) {
        const selectedText = sel.toString();
        const selectionStartOffset = sel.anchorOffset;
        const selectionEndOffset = sel.focusOffset;
        console.log("Selected Text:", selectedText);
        console.log("Selection Start Offset:", selectionStartOffset);
        console.log("Selection End Offset:", selectionEndOffset);
      }

    let range = sel.getRangeAt(0);

    let unwrappedContent = range.extractContents();

    if (!termWrapper.parentNode) {
      return;
    }
    termWrapper.parentNode.removeChild(termWrapper);

    range.insertNode(unwrappedContent);

    sel.removeAllRanges();
    sel.addRange(range);
  }

  addCommentBlockData(data: CommentBlockData) {
    if (data.count < 1 && this.commentBlockId) {
      this.commentBlockId = null;
    }
    if (data.count > 0 && !this.commentBlockId) {
      this.commentBlockId = data.id;
      this.customSurround();
    }
  }

  removeBlockComments() {
    console.log("remove comments");
  }

  setCommentBlockId(element: HTMLElement) {
    const commentBlockId = element.getAttribute(CommentId.CommentBlockId);
    if (!commentBlockId) {
      this.commentBlockId = null;
      return;
    }

    this.commentBlockId = commentBlockId;
  }

  activeOnClick() {
    const holder = document.getElementById(this.editorJsId);

    const observer = new MutationObserver((mutationList) => {
      mutationList.forEach((mutation, y) => {
        const targetNode: HTMLElement = mutation.target as HTMLElement;

        if (
          mutation.type === "childList" &&
          targetNode.classList.contains("codex-editor__redactor")
        ) {
          const spanTooltips = document.querySelectorAll(`.${Comment.CSS}`);

          spanTooltips.forEach((marker) => {
            const markerElement = marker as HTMLElement;
            if (this.markerColor) {
              markerElement.style.backgroundColor = this.markerColor;
            }
            markerElement.onclick = () => {
              this.setCommentBlockId(markerElement);
              this.renderCommentComponent();
            };
          });
        }
      });
    });

    if (holder) {
      observer.observe(holder, { childList: true, subtree: true });
    }
  }

  hideCommentComponent() {
    const commentContainer = document.getElementById(CommentId.ContainerId);
    this.removeActiveClass();
    if (!commentContainer) return;

    commentContainer.remove();
  }

  renderCommentComponent() {
    this.hideCommentComponent();

    const commentComponent = document.createElement("div");
    const blockId1 = this.api.blocks.getBlockByIndex(0)?.id;
    const escapedBlockId1 = blockId1.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\$&");
    const container = document.querySelector(`div[data-id="${escapedBlockId1}"]`);
    if (!container) {
        console.log("No div found on the first index");
        return;
    }
    
    commentComponent.id = CommentId.ContainerId;

    container.appendChild(commentComponent);
    const blockId = this.blockId;
    if (!blockId) {
      return;
    }

    const response = this.renderBody({
      commentBlockId: this.commentBlockId,
      blockId,
      onClose: () => this.onClose(),
      addCommentBlockData: (data: CommentBlockData) =>
        this.addCommentBlockData(data),
      removeBlockComments: () => this.removeBlockComments(),
    });

    if (response === null) {
      console.log("No render component was added in the config");
      return;
    }

    if (response instanceof HTMLElement) {
      commentComponent.appendChild(
        this.renderBody({
          commentBlockId: this.commentBlockId,
          onClose: () => this.onClose(),
          blockId,
          addCommentBlockData: (data: CommentBlockData) =>
            this.addCommentBlockData(data),
          removeBlockComments: () => this.removeBlockComments(),
        }) as Node
      );
    } else {
      // To avoid typescript error when using for project that uses html instead of react we set to any
      import("react-dom/client" as any)
        .then(({ createRoot }) => {
          const root = createRoot(commentComponent);

          root.render(response);
        })
        .catch((err) => {});
    }
    this.setActiveClass();
  }

  setActiveClass() {
    if (!this.commentBlockId) return;
    const element = this.elementByAttribute(
      CommentId.CommentBlockId,
      this.commentBlockId
    );
    if (!element) return;
    element.classList.add(CommentClasses.Active);
    if (this.activeColor) {
      element.style.borderColor = this.activeColor;
    }
    console.log("Active class added to element:", element);

  }

  removeActiveClass() {
    const elements = document.querySelectorAll("." + CommentClasses.Active);

    // Check if elements with the class exist before trying to remove the class
    if (elements.length > 0) {
        elements.forEach((element) => {
            element.classList.remove(CommentClasses.Active);
        });
    } else {
        console.log("No elements found with the class 'CommentClasses.Active'");
    }
}


  elementByAttribute(attributeName: string, value: string): HTMLElement {
    return document.querySelector(
      `[${attributeName}="${value}"]`
    ) as HTMLElement;
  }
 
  checkState() {
    const termTag = this.api.selection.findParentTag(this.tag, Comment.CSS);

    if (!this.button) {
      return;
    }

    this.button.classList.toggle(this.iconClasses.active, !!termTag);
  }

  get toolboxIcon() {
    return "";
  }

  static get sanitize() {
    return {
      mark: true,
    };
  }
}

export { Comment };
