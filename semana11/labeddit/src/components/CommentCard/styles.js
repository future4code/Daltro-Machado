import styled from "styled-components"
import {Card, CardActions, CardMedia} from '@material-ui/core';


export const CardStyled = styled(Card)`
    width: 50vw;
    min-width: 300px;
    margin: 10px;
    cursor: pointer;
    height: 100vh;
`

export const CardMediaStyled = styled(CardMedia)`
    height: 240px;
`
export const CardActionsStyled = styled(CardActions)`
    display: flex;
    justify-content: space-between;

`

export const CountVoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 3vw;
    min-width: 150px;
    justify-content: space-between;
    align-items: center;
`
export const VoteIcon = styled.img`
    height: 4vh;
    cursor: pointer;
`