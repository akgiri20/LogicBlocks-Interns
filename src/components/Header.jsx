import React, { useState, useRef, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Blockly from 'blockly';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import BoardsSelectionModal from './BoardsSelectionModal';


const ProjectNameInput = styled(TextField)({
  maxWidth: '200px',
  '& .MuiInputBase-input': {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});

export default function Header() {
  // Add state management for project name if needed
  const [projectName, setProjectName] = React.useState('Project_Name');

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 , width: '100%'}}>
      <AppBar position="static">
        <Toolbar>
          {/* LogicBlocks Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h1>LogicBlocks</h1>
          </Typography>

          {/* Navigation Buttons */}
          <div className="nav-button">
          <Button className="btn" color="inherit">Files</Button>
          <Button className="btn" color="inherit">Edit</Button>
          <Button className="btn" color="inherit">Tutorials</Button>
          <Button className="btn" color="inherit">Boards</Button>
          <Button className="btn" color="inherit">Connect</Button>
          </div> 
          
          {/* Editable Project Name */}
          <ProjectNameInput
            value={projectName}
            onChange={handleProjectNameChange}
            variant="outlined"
            placeholder="Project Name"
            InputProps={{
              startAdornment: <Typography>|</Typography>,
              endAdornment: <Typography>|</Typography>,
            }}
          />

          {/* Spacing Element */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Logo Placeholder */}
          <img src="trial_sprite_nobkg.png" alt="Logo" style={{ height: '50px' }} />

          {/* Sign In Button */}
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
