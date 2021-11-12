import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ArtGrid from "./components/ArtGrid";

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

      <Typography variant="h4" color="textSecondary" gutterBottom align="center">
        Discover Art
      </Typography>

      <ArtGrid />
      
    </Container>
  );
}

export default App;
