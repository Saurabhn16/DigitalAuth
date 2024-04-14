import React, { useEffect } from 'react';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import Alert from 'editorjs-alert';
import ToggleBlock from 'editorjs-toggle-block';
import NestedList from '@editorjs/nested-list';
import Checklist from '@editorjs/checklist';
import Table from '@editorjs/table';
import Title from "title-editorjs";
import AIText from '@alkhipce/editorjs-aitext'
// import DragDrop from 'editorjs-drag-drop';
import html2pdf from 'html2pdf.js'; // Import html2pdf.js

const EditorComponent: React.FC = () => {
    useEffect(() => {
        // Dynamic import to ensure EditorJS is only loaded in the browser
        import('@editorjs/editorjs')
            .then(({ default: EditorJS }) => {
                let editor = null;

                try {
                    editor = new EditorJS({
                        /**
                         * Id of Element that should contain the Editor
                         */
                        holderId: 'editorjs',
                        checklist: {
                            class: Checklist,
                            inlineToolbar: true,
                        },
                        tools: {
                            header: {
                                class: Header,
                                config: {
                                    placeholder: 'Enter a header',
                                    levels: [2, 3, 4],
                                    defaultLevel: 3,
                                    defaultAlignment: 'left'
                                }
                            }, 
                            toggle: {
                                class: ToggleBlock,
                                inlineToolbar: true,
                            },   
                            title: Title,
                            list: {
                                class: NestedList,
                                inlineToolbar: true,
                                config: {
                                    defaultStyle: 'unordered'
                                },
                            },
                            warning: Warning,
                            alert: Alert,
                            paragraph: {
                                class: Paragraph,
                                inlineToolbar: true,
                            }, 
                            aiText: {
                                class: AIText as unknown as ToolConstructable,
                                config: {
                                  openaiKey: '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'
                                }
                            },
                            quote: Quote, 
                            table: {
                                class: Table,
                                inlineToolbar: true,
                                config: {
                                  rows: 2,
                                  cols: 3,
                                },
                            },
                            // dragDrop: DragDrop // Add DragDrop tool
                        },
                    });
                } catch (error) {
                    console.error('Error initializing EditorJS:', error);
                }

                return () => {
                    if (editor && typeof editor.destroy === 'function') {
                        try {
                            editor.destroy();
                        } catch (error) {
                            console.error('Error destroying EditorJS instance:', error);
                        }
                    }
                };
            })
            .catch((error) => {
                console.error('Error loading EditorJS:', error);
            });
    }, []);

    const downloadAsPDF = () => {
        const element = document.getElementById('editorjs'); // Assuming your EditorJS component has an id of 'editorjs'
        
        if (element) {
            html2pdf().from(element).save('editor_content.pdf');
        } else {
            console.error('EditorJS element not found');
        }
    };

    return (
        <div>
            <div id="editorjs"></div>
            <button onClick={downloadAsPDF}>Download as PDF</button>
        </div>
    );
};

export default EditorComponent;
