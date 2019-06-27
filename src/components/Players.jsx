import React, { Component } from 'react'

export default class Players extends Component {
    render() {
        return (
            <ul>
            {Object.entries(this.props.players).map(([player, score]) => {
                    return (
                            Object.entries(this.props.display).map(([key, value])=> 
                                value && key===this.props.team
                                ? <li key={player}>{player} : {score}</li>
                                : null
                            )  
                            
                        )
                    }
                )}
            </ul>
        )
    }
}
