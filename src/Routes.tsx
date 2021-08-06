import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {css, Global} from "@emotion/react";

import ChatListPage from "./pages/ChatListPage";
import ChatRoomPage from "./pages/ChatRoomPage";

export default function Routes() {
    return (
        <BrowserRouter>
            <Global styles={styles}/>
            <Switch>
                <Route exact path="/" component={ChatListPage}/>
                <Route exact path="/room" component={ChatRoomPage}/>
            </Switch>
        </BrowserRouter>
    );
}

const styles = css`
  html,
  body {
    font-size: 15px;
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    overscroll-behavior: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  *:focus {
    outline: none;
  }
`;
