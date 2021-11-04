import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PurchaseOrderProvider from './context';
import Home from './pages/Home';

function App() {
  return (
    <PurchaseOrderProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </PurchaseOrderProvider>
  );
}

export default App;
