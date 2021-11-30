
// import { Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import UserGridView from "./components/user/views/UserGridView";

// const Home = () => {

//     const [msg, setMsg] = useState('');


//     useEffect(() => {
//         const url = "http://localhost:8080";
//         fetch(url).then(res => {
//             return res.text();
//         }).then(msg => {
//             console.log(msg);
//             setMsg(msg);
//         })
//     }, []);

//     return (
//         <div>
//             <Typography variant="h2" color="primary" gutterBottom>
//                 {msg}
//                 {/* {token} */}
//             </Typography>

//             {/* <Typography variant="h3"
//                 component={Link}
//                 to="/users"
//             >
//                 All Sellers
//             </Typography> */}
//         </div>
//     );
// }

// export default Home;

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CategoryGridView from './components/category/views/CategoryGridView';
import FeaturedArtsCarousel from './components/UI/FeaturedArtsCarousel';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Art Point
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to ArtPoint!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Love creating Art? Or just have a keen eye for it?
              Either way, you have landed on the right website!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href="/art" variant="contained">Discover Art</Button>
              <Button href="/art/create" variant="outlined">Sell your Art</Button>
            </Stack>

          </Container>
        </Box>
        {/* <Container sx={{ py: 8 }} maxWidth="md"> */}
        {/* End hero unit */}
        {/* <Typography variant="h5" color="primary" gutterBottom>Featured Art</Typography> */}
        {/* <ArtPageView baseURL="http://localhost:8080/arts?" /> */}
        {/* </Container> */}

        <Typography
          //component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Featured Art
        </Typography>
        <FeaturedArtsCarousel />

        <Typography
          //component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Explore Categories
        </Typography>

        <CategoryGridView />

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          ArtPoint
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Bridging the gap between Art Creators and Art Admirers
        </Typography>
        <Copyright />
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Link marginRight={1}>Terms and Conditions</Link>
          &#8226;
          <Link marginLeft={1}>Privacy</Link>
        </Box>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
