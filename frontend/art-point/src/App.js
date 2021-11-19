import { Container, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import ButtonAppBar from "./components/UI/ButtonAppBar";

function App() {


  return (
    <Container>
      <ButtonAppBar />

      <Outlet />

    </Container>
  );
}

export default App;
