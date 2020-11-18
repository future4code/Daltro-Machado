import React from 'react';
import styled from 'styled-components';

const CardsContainer = styled.div`
    border: 2px solid white;
    display: flex;
    flex-direction: column;
`;

const CardsInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

    p{
     margin: 4px 0;
    }
`;

const DetailButton = styled.button`
    align-self: center;
    margin-top: 4px;
`;


class CardTrip extends React.Component {

    render() {
        const trip = this.props.trip
        return <CardsContainer>
            <CardsInfo>
                <p>{trip.name}</p>
                <p>{trip.planet}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <DetailButton onClick = {() => this.props.details(trip.id)}>Ver Detalhes</DetailButton>
            </CardsInfo>
        </CardsContainer>
                }
}

export default CardTrip