import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
// mock
// import BasicTabs from '../../src/sections/settings/settings';
import BasicTabs from '../sections/admin/settings/settings';






export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Settings  </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h6" gutterBottom>
            Settings
          </Typography>
          {/* <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <BasicTabs />

          </Stack> */}

        </Stack>
        <BasicTabs />

        
      </Container>
    </>
  );
}
