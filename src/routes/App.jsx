import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Checkout from '../containers/Checkout.jsx';
import Information from '../containers/Information.jsx';
import Payment from '../containers/Payment.jsx';
import Success from '../containers/Success.jsx';
import NotFound from '../containers/NotFound.jsx';
import Layout from '../components/Layout.jsx';
import '../style/components/App.css';
import AppContext from '../context/AppContext.js';
import useInitialState from '../hooks/useInitialState.js';

const App = () => {
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}  />
                    <Route exact path="/checkout" component={Checkout}  />
                    <Route exact path="/checkout/information" component={Information}  />
                    <Route exact path="/checkout/payment" component={Payment}  />
                    <Route exact path="/checkout/success" component={Success}  />
                    <Route component={NotFound}  />
                </Switch>
            </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;