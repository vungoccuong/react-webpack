/*
 * Copyright (c) 2019.
 * Project: email-verifier-website.
 * Author: hirosume.
 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './layouts/Main/Index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
