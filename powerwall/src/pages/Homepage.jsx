import React from 'react';
import MenuIcon form '@mui/icons-material/Menu';

export const Homepage = (): JSX.Element => {
    const theme = useTheme();

    return (
        <Box>
            <AppBar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <h1>Homepage</h1>
            </AppBar>
        </Box>
    );
};