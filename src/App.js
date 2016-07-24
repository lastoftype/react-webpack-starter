import React from 'react'
import MainHeader from './components/mainHeader'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'App'
    }
    render() {

        return ( 
            <div className = "container">
                <MainHeader />
            </div>
        )
    }
}

export default App
