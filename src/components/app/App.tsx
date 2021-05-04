import React, {FC} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from '../header/header';
import Vehicles from '../pages/vehicles/vehicles';
import ChatPage from '../pages/chat/chat';
import NotificationsPage from "../pages/notifications/notifications";
import UserPage from "../pages/user/user";

const App: FC = () => {
    return (
        <main role="main">
            <Header />
            <Switch>
                <Redirect exact from="/" to="/vehicles" />
                <Route
                    path="/vehicles"
                    component={Vehicles}
                    exact
                />
                <Route
                    path="/vehicles/:id"
                    exact
                />
                <Route
                    path="/chat"
                    component={ChatPage}
                    exact
                />
                <Route
                    path="/notifications"
                    component={NotificationsPage}
                    exact
                />
                <Route
                    path="/user"
                    component={UserPage}
                    exact
                />
                <Route path="*"
                       component={() => <div>not found</div>} />
            </Switch>
        </main>
    );
}

export default App;
