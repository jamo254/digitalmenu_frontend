import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register.jsx';
import Place from './pages/Place';

import Places from './pages/Places';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './router/PrivateRoute';

//We need to create private route so that user can accent content only after login
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <PrivateRoute exact path='/places/:id'>
            <Place />
          </PrivateRoute>

          <PrivateRoute exact path='/places'>
            <Places />
          </PrivateRoute>
        </Switch>
      </BrowserRouter >
      <ToastContainer />
    </AuthProvider>
  )
}

export default App

