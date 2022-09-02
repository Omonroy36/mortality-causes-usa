import React from 'react';
import Box from '@mui/material/Box';
import Stack  from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Table from '../components/Table';
import Chart from '../components/Chart';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';


export default function App() {
  return (
      <Container maxWidth="lg">
        <Box>
          <Typography variant='h1'>
            Cause of Deaths in the US
          </Typography>
        </Box>
        <Stack direction='row' spacing={2}>
          <Box>
            <Sidebar />
          </Box>
          <Stack direction='column' spacing={2}>
            <Box>
              <Table />
            </Box>
            <Box>
              <Chart />
            </Box>
          </Stack>
        </Stack>
      </Container>
  );
}
