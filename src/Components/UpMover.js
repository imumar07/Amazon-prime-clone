import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function UpMover() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} className={{textAlign:"center"}}>
      <Fab variant="extended" size="medium" color="primary">
        <NavigationIcon />
      </Fab>

    </Box>
  );
}
