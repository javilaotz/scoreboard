import React, { Component } from 'react'
import '../App.css'

import { Button, Row, Col, Container } from 'reactstrap'

import Players from './Players'

export default class Team extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display : this.props.teams.reduce((acc, team) => ({...acc, [team[0]]:false}), {})
        }
    }

    handleClick = (team) => {
        this.setState((prevState) => ({ //lookup prevstate
            display : {...this.state.display, [team]:!this.state.display[team]}
        }))
        console.log(this.state.display[team])
    }
    
    render() {
        return (
            <Row>
                {this.props.teams.map(([team, players]) => {
                    return (
                        <Col md="6" key={team}>
                            <Button color="info"  className="team-name" onClick={() => this.handleClick(team)} key={team}>{team}</Button>   
                            <Players players={players} display={this.state.display} team={team}/>                             
                        </Col>
                        )
                    }
                )}
            </Row>
        )
    }
}
