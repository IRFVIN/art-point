import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DisplayArtItems from "./DisplayArtItems";


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
      <Typography variant="h1">
        {msg}
      </Typography>

      <DisplayArtItems />
      
    </Container>
  );
}

export default App;
