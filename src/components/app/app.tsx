import React from 'react';
import { Header } from '../header/header';
import './app.css';
import {
  BrowserRouter,
  Switch,
} from "react-router-dom";
import { PrivateRoute } from '../pivate-route';
import { Login } from '../pages/login';
import { Main } from '../pages/main';
import { GuestRoute } from '../guest-route';

export function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="main">
          <Header />
          <Switch>
            <GuestRoute path="/login">
              <Login />
            </GuestRoute>
            <PrivateRoute path="/">
              <Main />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
