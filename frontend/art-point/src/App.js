import { Container, Typography } from "@mui/material";
import { useState } from "react";


function App() {

  const [msg, setMsg] = useState('');

  const url = "http://localhost:8080";
  fetch(url).then(res => {
    return res.text();
  }).then(msg => {
    console.log(msg);
    setMsg(msg);
  })

  return (
    <Container>
      <Typography variant="h1">
        {msg}
      </Typography>
    </Container>
  );
}

export default App;
