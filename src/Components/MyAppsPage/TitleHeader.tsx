import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function TitleHeader() {
  return (
    <Stack ml={1} mb={3} mt={2} width={300} color="primary">
      <Container color="primary">
        <Typography variant="h3" ml={1}>
            My Apps
        </Typography>
      </Container>
    </Stack>
  );
}