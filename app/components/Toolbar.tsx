import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';

const ToolBar = ({ onSelectTool }) => {
    const [selectedTool, setSelectedTool] = useState('');

    const handleToolSelection = (tool) => {
        setSelectedTool(tool);
        onSelectTool(tool);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Tools
                </Typography>
                <Button color={selectedTool === 'header' ? 'primary' : 'inherit'} onClick={() => handleToolSelection('header')}>Header</Button>
                <Button color={selectedTool === 'paragraph' ? 'primary' : 'inherit'} onClick={() => handleToolSelection('paragraph')}>Paragraph</Button>
                <Button color={selectedTool === 'quote' ? 'primary' : 'inherit'} onClick={() => handleToolSelection('quote')}>Quote</Button>
                <Button color={selectedTool === 'warning' ? 'primary' : 'inherit'} onClick={() => handleToolSelection('warning')}>Warning</Button>
                <Button color={selectedTool === 'alert' ? 'primary' : 'inherit'} onClick={() => handleToolSelection('alert')}>Alert</Button>
                <Button color={selectedTool === 'toggle' ? 'primary' : 'inherit'} onClick={() => handleToolSelection('toggle')}>Toggle Block</Button>
                <Button color={selectedTool === 'list' ? 'primary' : 'inherit'} onClick={() => handleToolSelection('list')}>List</Button>
                <Button color={selectedTool === 'aiText' ? 'primary' : 'inherit'} onClick={() => handleToolSelection('aiText')}>AI Text</Button>
                {/* Add more buttons for other tools */}
            </Toolbar>
        </AppBar>
    );
};

export default ToolBar;
