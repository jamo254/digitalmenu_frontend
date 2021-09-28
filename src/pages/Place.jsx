import React, { useEffect, useState, useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { IoMdArrowBack } from 'react-icons/io';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';


import { fetchPlace } from '../router/apis';
import AuthContext from '../context/AuthContext';
import MainLayout from '../layout/MainLayout';
import MenuItemForm from '../container/MenuItemForm';


//Styled Components
const Panel = styled.div`
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0, 0.05)
`

function Place() {
    const [place, setPlace] = useState({});
    const auth = useContext(AuthContext)
    const params = useParams();
    const history = useHistory();

    const onBack = () => history.push("/places");
    const onFetchPlace = async () => {
        const json = await fetchPlace(params.id, auth.token);
        console.log(json)
        if (json) {
            setPlace(json);
        }
    };

    useEffect(() => {
        onFetchPlace()
    }, []);

    return (
        <MainLayout>
            <Row>
                <Col lg={ 12 }>
                    <div className="mb-4">
                        <div className="d-flex align-items-center">
                            <Button variant="link" onClick={ onBack }>
                                <IoMdArrowBack size={ 35 } color="black" />
                            </Button>
                            <h3 className="mb-0 ml-2 mr-2">{ place.name }</h3>
                        </div>
                    </div>
                </Col>
           
                <Col md={4}>
                    <Panel>
                        <MenuItemForm place={ place } onDone={ onFetchPlace }/>
                </Panel>
                </Col>
            </Row>
        </MainLayout>
    )
}

export default Place
