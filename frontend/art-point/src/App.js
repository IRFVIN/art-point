import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {

  const [msg, setMsg] = useState('');

  useEffect(() => {
    const url = "http://localhost:8080";
    fetch(url).then(res => {
      return res.text();
    }).then(msg => {
      console.log(msg);
      setMsg(msg);
    })
  }, []);


  return (
    <Container>
      <Typography variant="h2" color="primary" gutterBottom>
        {msg}
      </Typography>



      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/art">
        <Typography variant="h4" color="textSecondary" gutterBottom align="center">
          Discover Art
        </Typography>
      </Link>

      <Outlet />

    </Container>
  );
}

export default App;
