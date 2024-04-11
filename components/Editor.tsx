import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import ToolBar from './Toolbar';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import Alert from '@alkhipce/editorjs-aitext';
import ToggleBlock from 'editorjs-toggle-block';
import NestedList from '@editorjs/nested-list';
import Checklist from '@editorjs/checklist';
import Tooltip from 'editorjs-tooltip';
import Table from '@editorjs/table';
import Title from 'title-editorjs';
import AIText from '@alkhipce/editorjs-aitext';
import ImageTool from '@editorjs/image';
import html2pdf from 'html2pdf.js';
import AttachesTool from '@editorjs/attaches';
import CodeTool from '@editorjs/code';
// import Annotation from "@editorjs/annotation";

import mammoth from 'mammoth'; // Import mammoth for .docx conversion
// import Comment from 'editorjs-comment';
import RenderItem from './RenderItem'; // Make sure this import is correct
import { signal } from "@preact-signals/safe-react";
import { withTrackSignals } from "@preact-signals/safe-react/manual";
import './styles.css'; // Import the CSS file with custom styles
import {Comment, CommentBlockData, CommentConfig } from './CommentTool';

const EditorComponent = () => {
    let editor = null;

    const handleSelectTool = (tool) => {
        console.log(`Selected tool: ${tool}`);
        if (tool === 'header') {
            const editorElement = document.getElementById('editorjs');
            if (editorElement) {
                editorElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const saveContentToFile = async () => {
        try {
            if (editor) {
                const outputData = await editor.save();
                const jsonData = JSON.stringify(outputData);

                // Download as JSON
                const blob = new Blob([jsonData], { type: 'application/json' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'editor_content.json';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } else {
                console.error('Editor instance not found');
            }
        } catch (error) {
            console.error('Error saving content:', error);
        }
    };

    const loadContentFromFile = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json,.docx'; // Allow JSON and DOCX files
        input.onchange = async (event) => {
            const file = event.target.files[0];
            if (file.type === 'application/json') {
                const reader = new FileReader();
                reader.onload = () => {
                    try {
                        const jsonData = JSON.parse(reader.result);
                        if (editor) {
                            editor.clear(); // Clear existing content
                            editor.render(jsonData); // Render new content
                        }
                    } catch (error) {
                        console.error('Error parsing JSON file:', error);
                    }
                };
                reader.readAsText(file);
            } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                try {
                    const result = await mammoth.convertToHtml({ arrayBuffer: file });
                    if (editor) {
                        editor.clear(); // Clear existing content
                        editor.render({ blocks: [{ type: 'paragraph', data: { text: result.value } }] }); // Render new content
                    }
                } catch (error) {
                    console.error('Error loading DOCX content:', error);
                }
            } else {
                console.error('Unsupported file type');
            }
        };
        input.click();
    };
    useEffect(() => {
        import('@editorjs/editorjs')
            .then(({ default: EditorJS }) => {
                try {
                    editor = new EditorJS({
                        holderId: 'editorjs',
                        tools: {
                            header: {
                                class: Header,
                                config: {
                                    placeholder: 'Enter a header',
                                    levels: [2, 3, 4],
                                    defaultLevel: 3,
                                    defaultAlignment: 'left',
                                },
                            },
                            //  annotation: Annotation,
                            toggle: {
                                class: ToggleBlock,
                                inlineToolbar: true,
                            }, tooltip: {
                                class: Tooltip,
                                config: {
                                  location: 'left',
                                  underline: true,
                                  placeholder: 'Enter a tooltip',
                                  highlightColor: '#FFEFD5',
                                  backgroundColor: '#154360',
                                  textColor: '#FDFEFE',
                                  holder: 'editorId',
                                }
                              },
                            title: Title,
                            list: {
                                class: NestedList,
                                inlineToolbar: true,
                                config: {
                                    defaultStyle: 'unordered',
                                },
                            },
                            warning: Warning,
                            alert: Alert,
                            paragraph: {
                                class: Paragraph,
                                inlineToolbar: true,
                            },
                            aiText: {
                                class: AIText,
                                config: {
                                    openaiKey:
                                        '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',
                                },
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
                            code: CodeTool,
                            image: {
                                class: ImageTool,
                                config: {
                                    uploader: {
                                        uploadByFile(file) {
                                            return MyAjax.upload(file).then(() => {
                                                return {
                                                    success: 1,
                                                    file: {
                                                        url:
                                                            'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
                                                    },
                                                };
                                            });
                                        },
                                        uploadByUrl(url) {
                                            return MyAjax.upload(file).then(() => {
                                                return {
                                                    success: 1,
                                                    file: {
                                                        url:
                                                            'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
                                                    },
                                                };
                                            });
                                        },
                                    },
                                },
                            },
                            attaches: {
                                class: AttachesTool,
                                config: {
                                    endpoint: 'http://localhost:3000/uploadFile',
                                },
                            },
                            comment: {
                                class: Comment,
                                inlineToolbar: true,
                                config: {
                                    markerColor: "grey", // optional 
                                    activeColor: "green",// optional
                                    renderBody: ({
                                        commentBlockId,
                                        blockId,
                                        onClose,
                                        addCommentBlockData,text
                                    }) => {
                                        return RenderItem({
                                            onClose,
                                            blockId,
                                            commentBlockId,
                                            addCommentBlockData,text
                                        });
                                    },
                                    removeBlockComments: () => {} // Add this dummy function
                                },
                            },
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
        const element = document.getElementById('editorjs');

        if (element) {
            html2pdf().from(element).save('editor_content.pdf');
        } else {
            console.error('EditorJS element not found');
        }
    };

    const convertToDocx = async () => {
        if (editor) {
            try {
                const outputData = await editor.save();
                const htmlContent = outputData.blocks.map((block) => {
                    switch (block.type) {
                        case 'header':
                            return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
                        case 'paragraph':
                            return `<p>${block.data.text}</p>`;
                        case 'quote':
                            return `<blockquote>${block.data.text}</blockquote>`;
                        // Handle other block types if needed
                        default:
                            return '';
                    }
                }).join('');

                const convertedDocx = await mammoth.convertHtml(htmlContent);
                const blob = new Blob([convertedDocx], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'editor_content.docx';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } catch (error) {
                console.error('Error converting to DOCX:', error);
            }
        } else {
            console.error('Editor instance not found');
        }
    };

    return (
        <div className="container mx-auto p-4 border border-black">
            <h1 className="text-3xl font-bold mb-4">Editor</h1>
            <ToolBar onSelectTool={handleSelectTool} />
            <div id="editorjs" className="border border-black mb-4"></div>
            <Button onClick={downloadAsPDF} variant="contained" color="primary">
                Download as PDF
            </Button>
            <Button onClick={saveContentToFile} variant="contained" color="primary">
                Save Content
            </Button>
            <Button onClick={loadContentFromFile} variant="contained" color="primary">
                Load Content
            </Button>
            <Button onClick={convertToDocx} variant="contained" color="primary">
                Convert to DOCX
            </Button>
        </div>
    );
};

export default EditorComponent;
