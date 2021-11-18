import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import ButtonAppBar from "./components/UI/ButtonAppBar";

function App() {

  const [msg, setMsg] = useState('');

  const token = useSelector(state => state.auth.token);
  console.log(token);

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
      <ButtonAppBar />
      <Typography variant="h2" color="primary" gutterBottom>
        {msg}
        {/* {token} */}
      </Typography>





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
