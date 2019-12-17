import React, { Component, Fragment } from 'react'
import TopNav from './navigation/TopNav'

export class App extends Component {
    render() {
        return (
            <Fragment>
                <TopNav />
                <div>
                    RoR Chat App
            </div>
            </Fragment>

        )
    }
}

export default App
