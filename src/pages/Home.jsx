import React from 'react'
import MainLayout from '../layout/MainLayout';

import { Button, Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'

function Home() {
    return (

        <MainLayout>
            <Jumbotron className="bg-light" style={ { marginTop: 20, borderRadius:20}}>
                <Container >
                    <Row>
                        <Col md={ 6 } className="my-auto">
                            <h1><b>Digital QR Menu</b></h1>
                            <h3 className="mt-4 mb-4">
                                An innovative way of sharing your menu using a QR Code.
                            </h3>
                            <br />
                            <Button href="/places" variant="standard">
                                Create your menu
                            </Button>
                        </Col>
                        <Col md={ 6 } >
                            <Image src="https://cdn.dribbble.com/users/997070/screenshots/4692707/foodapp-login.gif" rounded  fluid/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </MainLayout>
    )
}

export default Home
