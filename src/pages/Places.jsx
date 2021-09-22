import React, { useEffect, useState, useContext } from 'react'
import MainLayout from '../layout/MainLayout';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { fetchPlaces } from '../router/apis';

import AuthContext from '../context/AuthContext';

import "./Places.css";


const Place = styled.div`
    margin: 20px;
    cursor: pointer;
    transition: all 0.2s;
    height: 50%;
    :hover {
        transform: scale(1.05);
        }
    > div {
        background-size: cover;
        height: 300px;
        width: 100%;
        border-radius: 5px;
        margin: 5px;
    }
    > p {
        margin-top: 5px;
        font-size: 20px;
        font-weight: bold;
        
    }

`;

function Places() {
    const [places, setPlaces] = useState([]);
    const auth = useContext(AuthContext);

    const onFetchPlaces = async () => {
        const json = await fetchPlaces(auth.token);

        if (json) {
            setPlaces(json);
        }
    };


    //Return empty array so as to run useEffect once
    useEffect(() => {
        onFetchPlaces();

    })

    return (
        <MainLayout>
            <h3>My Places</h3>
            <Row>
                { places.map((place) => (
                    < Col key={ place.id } lg={ 4 } >
                        <Place>
                            <div style={ {
                                backgroundImage: `url(${place.image})`,
                            } } id="card"></div>
                            <p>{ place.name }</p>
                        </Place>
                    </Col>
                )) }
            </Row>
        </MainLayout >
    )
}

export default Places

//Second