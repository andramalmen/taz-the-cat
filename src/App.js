import React, { Component } from 'react'
import './styles/bootstrap/bootstrap.min.css'
import Presentation from './components/Presentation'
import Album from './components/Album'

class App extends Component {
    render() {
        return (
            <div className="App">
                <main role="main">
                    <Presentation />
                    <Album />
                </main>
            </div>
        )
    }
}

export default App
