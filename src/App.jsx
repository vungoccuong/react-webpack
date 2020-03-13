/*
 * Copyright (c) 2019.
 * Project: email-verifier-website.
 * Author: hirosume.
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './layouts/Main/Index.jsx';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/slices/user';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
