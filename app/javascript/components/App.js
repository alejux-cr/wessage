import React, { Component, Fragment } from 'react';
import TopNav from './navigation/TopNav';
import Chatroom from './chatroom/Chatroom';


export class App extends Component {
    render() {
        return (
            <Fragment>
                <TopNav />
                <Chatroom />
            </Fragment>

        )
    }
}

export default App
