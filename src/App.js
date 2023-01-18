import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { Helmet } from "react-helmet";
import SignUp from "./screens/SignUp";
import MoreInfo from "./screens/MoreInfo";
import Confirmation from "./screens/Confirmation";
import Success from "./screens/Success";
import Error from "./screens/Error";
import Layout from "./screens/Layout";

import "./App.css";

createStore({
  name: '',
  email: '',
  password: '', // this would ideally be hashed
  color: '',
  terms: false,
});

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Helmet>
          <title>Upgrade Frontend Challenge</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Helmet>

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
      </div>
    );
  }
}

export default App;
