import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Input from '../../Input';
import OptionList from '../OptionList';

export default function Filter () {
    return <Stack direction="column" spacing={2}>
        <Box>
            <Input label="Causes"/>
        </Box>
        <Box>
            <OptionList />
        </Box>
    </Stack>
}
 
