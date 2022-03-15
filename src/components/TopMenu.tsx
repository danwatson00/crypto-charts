import React, { FC, ReactElement } from 'react';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';
//import Logo from '../images/logo-sm.png';
// import Logo from '../images/DW_Dan Logo.svg';
// import LogoWhite from '../images/DW_LOGO_WHITE.svg';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

const TopMenu: FC = (): ReactElement => {

    const theme = useTheme();
  
    return (
        <Grid sx={{ justifyContent: 'space-between', padding: 1, alignItems: 'center' }} container>
            <Grid item>
                <Typography>Crypto Trends</Typography>
            </Grid>
            <Grid item>
                <List style={{ display: 'flex', flexDirection: 'row', padding: 0, justifyContent: 'space-between' }}>
                    <ListItem button>
                        <Link  style={{textDecoration: 'none'}} to={ROUTES.HOME} className="nav-btn">
                            <Typography color={theme.palette.text.primary}>HOME</Typography>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link style={{textDecoration: 'none'}} to={ROUTES.ABOUT} className="nav-btn">
                            <Typography color={theme.palette.text.primary}>ABOUT</Typography>
                        </Link>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
  };

  export default TopMenu;