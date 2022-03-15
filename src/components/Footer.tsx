import React, { FC, ReactElement, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../App';

const Footer: FC = (): ReactElement => {

  const theme = useTheme();

  
  const colorMode = useContext(ColorModeContext);

    return (
        <footer style={{ backgroundColor: "white", position: "fixed", bottom: 0, textAlign: 'center', width: '100%' }}>
                {theme.palette.mode === 'light' && 'LIGHT'}
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="default">
                {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />} 
                </IconButton>
                {theme.palette.mode === 'dark' && 'DARK'}
        </footer>
    )   
}

export default Footer;