import React, { Component } from 'react'
import { Row, Col, Container, Card, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import '../App.css'

import Team from './Team'

export default class Scoreboard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{size: 6, offset:3}}>
                        <Card>
                            <CardHeader>Scoreboard</CardHeader>
                            <CardBody>
                                <CardTitle>List of teams</CardTitle>
                                <CardText className="card-body"> 
                                    <Team teams={Object.entries(this.props.data.teams)}/>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
