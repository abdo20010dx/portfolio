import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Paper, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { styles } from '../shared/styles';

export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ pb: 7 }}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    sx={{ borderStyle: "groove" }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction href='https://www.linkedin.com/in/abdo-gomaa-672763119/' label="Follow Me On LinkedIn" icon={<LinkedIn />} />
                    <BottomNavigationAction href='https://github.com/abdo20010dx' label="Follow Me On GitHub" icon={<GitHub />} />
                </BottomNavigation>
            </Paper>
        </Box >
    );
}