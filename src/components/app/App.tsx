import React, {FC} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../header/header';
import ItemsList from '../pages/items-list/items-list';
import ChatPage from '../pages/chat/chat';
import NotificationsPage from "../pages/notifications/notifications";
import UserPage from "../pages/user/user";

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
