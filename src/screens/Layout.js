import { Outlet, Link } from "react-router-dom";
import { Container } from '@mui/material';
import AppHeader from "../components/AppHeader";

const Layout = () => {
  return (
    <>
      <AppHeader />

      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </>
  );
}


export default Layout;