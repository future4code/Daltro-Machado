import styled from "styled-components"
import {Card, CardActions, CardMedia} from '@material-ui/core';


export const CardStyled = styled(Card)`
    width: 50vw;
    min-width: 300px;
    margin: 10px;
`

export const CardMediaStyled = styled(CardMedia)`
    height: 240px;
`
export const CardActionsStyled = styled(CardActions)`
    display: flex;
    justify-content: space-between;

`