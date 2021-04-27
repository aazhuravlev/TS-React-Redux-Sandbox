import React, {FC} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../header/header';
import ItemsList from '../pages/items-list';
import ChatPage from '../pages/chat';
import NotificationsPage from "../pages/notifications";
import UserPage from "../pages/user";

const App: FC = () => {
    return (
        <main role="main">
            <Header />
            <Switch>
                <Route
                    path="/"
                    component={ItemsList}
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
            </Switch>
        </main>
    );
}

export default App;
