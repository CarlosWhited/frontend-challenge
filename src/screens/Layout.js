import { Outlet, Link } from "react-router-dom";
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <header>
          <h1>Welcome to Upgrade challenge</h1>
        </header>
      </nav>

      <hr />

      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;