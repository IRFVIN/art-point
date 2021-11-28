import { Container, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import ButtonAppBar from "./components/UI/ButtonAppBar";
import ResponsiveDrawer from "./components/UI/ResponsiveDrawer";
// import TemporaryDrawer from "./components/UI/TemporaryDrawer";

function App() {

  return (<ResponsiveDrawer />);

  // return (
  //   // <Container>
  //   <ResponsiveDrawer />
  //     {/* <ButtonAppBar /> */ }
  // {/* <TemporaryDrawer /> */ }

  // {/* <Outlet /> */ }

  // {/* </Container> */ }
  // );
}

export default App;
