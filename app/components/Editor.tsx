import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
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
import mammoth from 'mammoth'; // Import mammoth for .docx conversion
import RenderItem from './RenderItem'; // Make sure this import is correct
import './styles.css';
import axios from 'axios';// Import the CSS file with custom styles
import { Comment } from './CommentTool';
import { useSession } from 'next-auth/react';
import EditorJS from '@editorjs/editorjs';

const EditorComponent = () => {
    const [editor, setEditor] = useState(null);
    const [versions, setVersions] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        if (!editor) {
            initializeEditor();
        }
    }, [editor]);

    useEffect(() => {
        // Load verussions from local storage
        const savedVersions = localStorage.getItem('editor_versions');
        if (savedVersions) {
            setVersions(JSON.parse(savedVersions));
        }
    }, []);


    const justSave = async (data) => {

        console.log("editior", data);
        await setEditor(data);

    }
    useEffect(() => {
        console.log("Updated editor:", editor);
    }, [editor]);

    const initializeEditor = async () => {
        try {
            const newEditor = new EditorJS({
                onReady: () => { console.log('Editor.js is ready to work!') },
                onChange: async () => {
                    try {
                        console.log("Editor's content has changed!");

                        // Save the output data to outData state
                        const savedData = await newEditor.save();
                        await justSave(savedData);
                        // setOutData(savedData); // Set outData state with the savedData
                        //   setEditor(newEditor); 
                        // Continue with any other logic you need
                        console.log('Current content:', savedData);

                    } catch (error) {
                        console.error('Error getting current content:', error);
                    }

                },
                autofocus: true,
                holderId: 'editorjs',
                defaultBlock: 'myOwnParagraph',
                // logLevel: 'ERROR',
                placeholder: 'Let`s write an awesome story!',
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
                    toggle: {
                        class: ToggleBlock,
                        inlineToolbar: true,
                    },
                    tooltip: {
                        class: Tooltip,
                        config: {
                            location: 'left',
                            underline: true,
                            placeholder: 'Enter a tooltip',
                            highlightColor: '#FFEFD5',
                            backgroundColor: '#154360',
                            textColor: '#FDFEFE',
                            holder: 'editorId',
                        },
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
                            markerColor: 'grey', // optional
                            activeColor: 'green', // optional
                            renderBody: ({
                                commentBlockId,
                                blockId,
                                onClose,
                                addCommentBlockData,
                                text,
                            }) => {
                                return RenderItem({
                                    onClose,
                                    blockId,
                                    commentBlockId,
                                    addCommentBlockData,
                                    text,
                                });
                            },
                            removeBlockComments: () => { }, // Add this dummy function
                        },
                    },
                },
            });
           setEditor(newEditor);
        } catch (error) {
            console.error('Error initializing EditorJS:', error);
        };
    };

    const saveContentToFile = async () => {
        try {
            console.log('Saving content...');

            if (!editor) {
                console.error('Editor instance not found');
                return;
            }
            // console.log("save", editor);            // Save the content using editor.save() and handle output data

            const outputData =editor; // Await the save() function
            console.log('Output data:', outputData);
            const jsonData = JSON.stringify(outputData);
            console.log('JSON data:', jsonData);

            // Create a Blob for potential client-side download (optional)
            const blob = new Blob([jsonData], { type: 'application/json' });

            if (session) {
                console.log('Session:', session);
                console.log('User ID:', session?.user?.id);
                const userId = session.user.id;
                const filename = `data_${Date.now()}.json`;
                console.log('Filename:', filename);

                const dataToSend = {
                    userId: userId,
                    documentId: 'documentId', // Replace with actual document ID
                    content: jsonData,
                    filename: filename,
                };

                // Send data to server-side API route for persistence
                try {
                    const response = await axios.put('/api/savecontent', dataToSend);

                    if (response.status === 200) {
                        console.log('Content data sent to server successfully.');
                    } else {
                        console.error('Failed to send content data to server:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error sending content data to server:', error);
                }
            }
        } catch (error) {
            console.error('Error saving content:', error);
        }
    }; 
     const saveVersionToFile = async () => {
        try {
            console.log('Saving content...');

            if (!editor) {
                console.error('Editor instance not found');
                return;
            }
            // console.log("save", editor);            // Save the content using editor.save() and handle output data

            const outputData =editor; // Await the save() function
            console.log('Output data:', outputData);
            const jsonData = JSON.stringify(outputData);
            console.log('JSON data:', jsonData);

            // Create a Blob for potential client-side download (optional)
            const blob = new Blob([jsonData], { type: 'application/json' });

            if (session) {
                console.log('Session:', session);
                console.log('User ID:', session?.user?.id);
                const userId = session.user.id;
                const filename = `data_${Date.now()}.json`;
                console.log('Filename:', filename);

                const dataToSend = {
                    userId: userId,
                    documentId: 'documentId', // Replace with actual document ID
                    content: jsonData,
                    filename: filename,
                };

                // Send data to server-side API route for persistence
                try {
                    const response = await axios.put('/api/saveVersion', dataToSend);

                    if (response.status === 200) {
                        console.log('Content data sent to server successfully.');
                    } else {
                        console.error('Failed to send content data to server:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error sending content data to server:', error);
                }
            }
        } catch (error) {
            console.error('Error saving content:', error);
        }
    };

    // const saveContentToFile = async () => {
    //     try {
    //       
    //         if (editor) {
    //             // console.log( await editor);
    //             const outputData = await editor.save();
    //             console.log('Output data:', outputData); // Log outputData
    //             const jsonData = JSON.stringify(outputData);
    //             console.log('JSON data:', jsonData); // Log jsonData
    //             if (session) {
    //                 console.log('Session:', session);
    //                 console.log('User ID:', session?.user?.id);
    //                 const userId = session.user.id; // Assuming 'id' is the field that contains the userId
    //                 const filename = `data_${Date.now()}.json`;
    //                 console.log('Filename:', filename); // Log filename
    //                 // Now you can log the userId and include it in the data sent to the server
    //                 console.log('User ID:', userId);
    //                 console.log('Data to be sent to server:', {
    //                     userId: userId,
    //                     documentId: 'documentId', // Replace with actual document ID
    //                     content: jsonData,
    //                     filename: filename,
    //                 });
    //                 const blob = new Blob([jsonData], { type: 'application/json' });
    //                 const url = window.URL.createObjectURL(blob);
    //                 const a = document.createElement('a');
    //                 a.href = url;
    //                 a.download = 'editor_content.json';
    //                 document.body.appendChild(a);
    //                 a.click();
    //                 window.URL.revokeObjectURL(url);
    //                 document.body.removeChild(a);
    //                 const formData = new FormData();
    //                 formData.append('userId', userId);
    //                 formData.append('documentId', 'documentId'); // Replace with actual document ID
    //                 formData.append('content', blob, filename);

    //                 // Send POST request to save content
    //                 const response = await axios.put('/api/savecontent', formData);

    //                 // Check response status and handle accordingly
    //                 if (response.status === 200) {
    //                     console.log('Content data sent to server successfully.');
    //                 } else {
    //                     console.error('Failed to send content data to server:', response.statusText);
    //                 }
    //             } else {
    //                 console.log("Please login");
    //             }
    //         } else {
    //             console.error('Editor instance not found');
    //         }
    //     } catch (error) {
    //         console.error('Error saving content:', error);
    //     }
    // };

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
                const htmlContent = outputData.blocks
                    .map((block) => {
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
                    })
                    .join('');

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
            <div id="editorjs" className="border border-black mb-4"></div>
            <Button onClick={downloadAsPDF} variant="contained" color="primary">
                Download as PDF
            </Button>
            <Button onClick={saveContentToFile} variant="contained" color="primary">
                Save Content
            </Button>
            <Button onClick={saveVersionToFile} variant="contained" color="secondary">
                Save Version
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
