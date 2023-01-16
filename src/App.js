import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import SignUp from "./screens/SignUp";
import MoreInfo from "./screens/MoreInfo";
import Confirmation from "./screens/Confirmation";
import Success from "./screens/Success";
import Error from "./screens/Error";
import Layout from "./screens/Layout";

createStore({
  data: {
    name: '',
    email: '',
    password: '', // this should be hashed somehow (not gonna do it now ofc)
    color: '',
    terms: false,
  }
});

class App extends Component {
  render() {
    return (
      <>
        <head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </head>

        {/* Routes nest inside one another. Nested route paths build upon
        parent route paths, and nested route elements render inside
        parent route elements. See the note about <Outlet> below. */}
        {/* I don't think this needs an initial value? */}
        <StateMachineProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<SignUp />} />
              <Route path="more-info" element={<MoreInfo />} />
              <Route path="confirmation" element={<Confirmation />} />
              <Route path="success" element={<Success />} />
              <Route path="error" element={<Error />} />

              {/* Should probably build a separate 404 page but using the error page for now */}
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </StateMachineProvider>
      </>
    );
  }
}

export default App;
