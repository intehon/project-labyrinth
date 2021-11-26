import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextStep } from '../reducers/game'
import { End } from './End'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import img00 from '../images/img00.jpg'
import img01 from '../images/img01.jpg'
import img02 from '../images/img02.jpg'
import img03 from '../images/img03.jpg'
import img10 from '../images/img10.jpg'
import img11 from '../images/img11.jpg'
import img12 from '../images/img12.jpg'
import img13 from '../images/img13.jpg'

let backgroundImage = (coordinates) => {
  switch (coordinates) {
    case '0,0':
    return img00;
    break;
    case '0,1':
    return img01;
    break;
    case '0,2':
    return img02;
    break;
    case '0,3':
    return img03;
    break;
    case '1,0':
    return img10;
    break;
    case '1,1':
    return img11;
    break;
    case '1,2':
    return img12;
    break;
    default:
    return img13;
  }}
  


const GameBoard = styled.section`
 background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  object-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100px;
  min-height: 300px;
  border: whitesmoke solid 4px;
  border-radius: 6px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);

  @media (min-width: 768px) {
    min-width: 600px;
    padding: 30px;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Maze = () => {
    const { description, coordinates, actions } = useSelector(store => store.game.currentPosition)
    const dispatch = useDispatch()

    const handleButtonClick = (type, direction) => {
        // call the api, pass along type and direction to use as part of the body
        dispatch(nextStep(type, direction))
    }

    const ActionCard = ({ description, type, direction }) => (
        <TextContent> 
            <p>{description}</p>
            <Button 
              variant="contained"
              color="secondary"
              onClick={() => handleButtonClick(type, direction)}>
                {type} {direction.toLowerCase()}
            </Button>
        </TextContent>
    )

    return (
        <GameBoard coordinates={coordinates}>
            <Content>
                <Container>
                    {actions.length !== 0 && 
                    <TextContent>
                        <h1>{description}</h1>
                        <p>Your current position: {coordinates}</p>
                    </TextContent>
                    } 
                    {actions.length === 0 ? <End /> :
                    actions.length > 0 && actions.map(item => <ActionCard key={item.direction} {...item} />)}
                </Container>
            </Content>
        </GameBoard>
    )
}
