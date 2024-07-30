import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import Alert from '@alkhipce/editorjs-aitext';
import ToggleBlock from 'editorjs-toggle-block';
import NestedList from '@editorjs/nested-list';
import Tooltip from 'editorjs-tooltip';
import Table from '@editorjs/table';
import Title from 'title-editorjs';
import AIText from '@alkhipce/editorjs-aitext';
import ImageTool from '@editorjs/image';
import html2pdf from 'html2pdf.js';
import AttachesTool from '@editorjs/attaches';
import CodeTool from '@editorjs/code';
import mammoth from 'mammoth'; // Import mammoth for .docx conversion
// Make sure this import is correct
import './styles.css';
import axios from 'axios';// Import the CSS file with custom styles

import { useSession } from 'next-auth/react';
import EditorJS from '@editorjs/editorjs';
import styles from '../components/styles.module.css';

const EditorComponent = () => {
    const [editor, setEditor] = useState(null);
    const [versions, setVersions] = useState([]);
    const [documentId, setDocumentid] = useState([]);
    const [currentView, setCurrentView] = useState('');

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    const { data: session } = useSession();
    const [documents, setDocuments] = useState([]);
    const [showDocumentCard, setShowDocumentCard] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [users, setUsers] = useState([]);
    const [showUsers, setShowUsers] = useState(false);
    useEffect(() => {
        // Load verussions from local storage
        const savedVersions = localStorage.getItem('editor_versions');
        if (savedVersions) {
            console.log("savingVersion");
            setVersions(JSON.parse(savedVersions));
        }
    }, []);
    const toggleUsers = () => {
        setShowUsers(!showUsers);
      };
      const toggleSidebar1 = () => {
        setShowSidebar(!showSidebar);
      };
    
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
                    }
                  
                },
            });
            setEditor(newEditor);
        } catch (error) {
            console.error('Error initializing EditorJS:', error);
        };
    };
    useEffect(() => {
        if (!editor) {
            initializeEditor();
        }
    }, [editor, initializeEditor]);
    const viewDocument = async () => {
        try {
            console.log('Viewing content...');

            if (session) {
                console.log('Session:', session);
                console.log('User ID:', session?.user?.id);
                const userId = session.user.id;

                const dataToSend = {
                    userId: userId,
                };
                console.log(dataToSend);

                try {
                    // Send a GET request to fetch document data
                    // Send a GET request to fetch document data
                    const response = await axios.get(`/api/viewDocument`, {
                        params: { userId }
                    });
                    console.log("set");
                    console.log(response.data.documents);
                    setDocuments(response.data.documents);
                    setSelectedDocument(!selectedDocument);


                } catch (error) {
                    console.error('Error fetching content data from server:', error);
                }
            }
        } catch (error) {
            console.error('Error viewing content:', error);
        }
    };

    const setDocument = (id) => {
        console.log(id);
        setDocumentid(id);
    };

    const viewUsers = async () => {
        try {
            console.log('Viewing users...');

            if (session) {
                console.log('Session:', session);
                console.log('User ID:', session?.user?.id);
                const userId = session.user.id;

                const dataToSend = {
                    userId: userId
                };
                console.log(dataToSend);

                try {
                    // Send a GET request to fetch users data
                    const response = await axios.get('/api/users', {
                        headers: {
                            Authorization: `Bearer ${session.accessToken}`
                        }
                    });

                    console.log("Users data received:");
                    console.log(response.data.users);
                    setUsers(response.data.users);
                    setShowUsers(!showUsers);

                } catch (error) {
                    console.error('Error fetching users data from server:', error);
                }
            }
        } catch (error) {
            console.error('Error viewing users:', error);
        }
    };

    const viewDocumentVersions = async () => {
        try {
            console.log("Current documents state:", documents);
            if (!documents || documents.length === 0) {
                console.error("Documents list is empty. Please ensure documents are fetched and set properly.");
                return;
            }
            if (!documentId) {
                console.error("Document ID is empty. Please select a document.");
                return;
            }
            console.log("Using document ID:", documentId);
            const response = await axios.get('/api/viewVersion/', {
                params: { documentId }
            }); // Replace 'yourDocumentId' with the actual document ID
            console.log("Version data:", response.data); // Log the entire object

            // Log keys and values of response.data
            for (const key in response.data) {
                console.log(`${key}:`, response.data[key]);
            }

            // If you know the specific structure of the response, you can access the version information accordingly
            // For example, if versions are stored in a property called 'versions'
            const versions = response.data.versions;
            setVersions(versions);
            if (Array.isArray(versions)) {
                console.log("Number of versions:", versions.length);
                versions.forEach((version, index) => {
                    console.log(`Version ${index + 1} Content:`, version.content);
                    console.log(`Version ${index + 1} Created At:`, version.createdAt);
                    // Log other properties of the version as needed
                });
            } else {
                console.error("Versions not found or not in the expected format");
            }
            setShowSidebar(!showSidebar);
        } catch (error) {
            console.error('Error fetching document versions:', error);
        }
    };
    const shareDocumentWithUser = async (userId) => {
        try {
            // Perform any necessary actions to share the document with the user identified by userId
            console.log(`Sharing document with user ${userId}...`);
            const dataToSend = {
                userId: userId,
                documentId: documentId, // Replace with actual document ID
            };
            console.log(dataToSend);
            try {
                const response = await axios.put('/api/sharewith', dataToSend);

                if (response.status === 200) {
                    console.log('Content data sent to server successfully.');
                } else {
                    console.error('Failed to send content data to server:', response.statusText);
                }
            } catch (error) {
                console.error('Error sending content data to server:', error);
            }
            // Add your implementation here
        } catch (error) {
            console.error('Error sharing document:', error);
        }
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    };
    const sidebarContent = (
        <div className="sidebar">
            <h2>Versions of Document</h2>
            {versions.map((version, index) => (
                <div key={index} className="version-card">
                    <hs3>Version {index + 1}</hs3>
                    <div className="version-details">
                        <p><strong>Content:</strong> {JSON.stringify(version.content)}</p>
                        <p><strong>Created At:</strong> {new Date(version.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="button-container">
                        <Button onClick={() => restoreVersion(index)} variant="contained" color="primary">
                            Restore
                        </Button>
                    </div>
                </div>
            ))}
        
        </div>
    );

    const saveContentToFile = async () => {
        try {
            console.log('Saving content...');

            if (!editor) {
                console.error('Editor instance not found');
                return;
            }
            // console.log("save", editor);            // Save the content using editor.save() and handle output data

            const outputData = editor; // Await the save() function
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
                    documentId: documentId,
                    content: jsonData,
                    filename: filename,
                };
                console.log(dataToSend);

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

            const outputData = editor; // Await the save() function
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
                    documentId: documentId, // Replace with actual document ID
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
                        console.log(jsonData);
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

    const restoreVersion = async (index) => {
        try {
            // Get the content of the selected version using the index
            const versionContent = JSON.parse(versions[index].content);
            console.log(versionContent);
            // Render the content in the editor
            if (editor) {
                editor.clear(); // Clear existing content
                editor.render(versionContent); // Render the content of the selected version
            }
        } catch (error) {
            console.error('Error restoring version:', error);
        }
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

    return (<><div>
        <div style={{ display: 'flex' }}>
          <div className={showSidebar ? styles.sidebarOpen : styles.sidebarClosed}>
            <div className={styles.sidebar}>
              <Button onClick={toggleSidebar} variant="contained" color="primary">
                Menu
              </Button>
          
              <div className={styles.sidebarButton}>
                <Button onClick={downloadAsPDF} variant="contained" color="primary">
                  Download as PDF
                </Button>
              </div>
              <div className={styles.sidebarButton}>
                <Button onClick={saveContentToFile} variant="contained" color="primary">
                  Save Content
                </Button>
              </div>
              <div className={styles.sidebarButton}>
                <Button onClick={viewDocument} variant="contained" color="primary">
                  View Document
                </Button>
              </div>
              {selectedDocument && (
                <div className={styles.documentDetails}>
                  {documents.map((document, index) => (
                    <div key={index} className={styles.documentCard}>
                      <h3 className="font-bold">{document.title}</h3>
                      <p>Created At: {new Date(document.createdAt).toLocaleString()}</p>
                      <Button onClick={() => setDocument(document._id)} variant="contained" color="primary">
                        Set Document
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              <div className={styles.sidebarButton}>
                <Button onClick={saveVersionToFile} variant="contained" color="secondary">
                  Save Version
                </Button>
              </div>
              <div className={styles.sidebarButton}>
                <Button onClick={loadContentFromFile} variant="contained" color="primary">
                  Load Content
                </Button>
              </div>
              <div className={styles.sidebarButton}>
                <Button onClick={convertToDocx} variant="contained" color="primary">
                  Convert to DOCX
                </Button>
              </div>
              <div className={styles.sidebarButton}>
                <Button onClick={viewUsers} variant="contained" color="primary">
                  View All Users
                </Button>
              </div>
              <div className={styles.sidebarButton}>
                <Button onClick={viewDocumentVersions} variant="contained" color="primary">
                  View Document Versions
                </Button>
                {showSidebar && <div className={styles.sidebar}>{sidebarContent}</div>}
              </div>
            </div>
          </div>
      
          <div className={styles.mainContent}>
          
      
            {showUsers && (
              <div className={styles.usersContainer}>
                <h2>All Users</h2>
                <ul>
                  {users.map((user) => (
                    <li key={user._id}>
                      {user._id}({user.email})
                      <Button onClick={() => shareDocumentWithUser(user._id)} variant="contained" color="primary">
                        Share Document
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
       
      
        <div className={styles.container}>
          <h1 className={styles.header}>Editor</h1>
          <div id="editorjs" className={styles.editor}></div>
        </div></div></div>
      </>
       );
};

export default EditorComponent;
