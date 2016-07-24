import React from 'react'

class MainHeader extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'MainHeader'
    }
    render() {

        return (
            <div className="main-wrapper">
                <h1>My Cool Project</h1>
            </div>
        )
    }
}

export default MainHeader
