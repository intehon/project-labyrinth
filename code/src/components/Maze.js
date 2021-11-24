import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextStep } from '../reducers/game'
import {End } from './End'
import styled from 'styled-components'
import 0,1 from '../images/0,1.jpg'

const GameBoard = styled.section`
  background-image: url(img-${props.coordinates});
  background-position: center;
  background-size: cover;
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
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-evenly;
  /* width: 100px; */
  min-height: 300px;
  border: whitesmoke solid 4px;
  border-radius: 6px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: #f7f5e1;

  @media (min-width: 768px) {
    min-width: 600px;
    padding: 30px;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Maze = () => {
    const { description, coordinates, actions } = useSelector(store => store.game.currentPosition)
    const dispatch = useDispatch()

    const handleButtonClick = (type, direction) => {
        // call the api, pass along type and direction to use as part of the body
        dispatch(nextStep(type, direction))
    }

    const ActionCard = ({ description, type, direction }) => (
        <div>
            <p>{description}</p>
            <button onClick={() => handleButtonClick(type, direction)}>
                {type} {direction.toLowerCase()}
            </button>
        </div>
    )

    return (
        <GameBoard>
            <Content>
                <Container>
                    {actions.length !== 0 && 
                    <TextContent>
                        <h1>Current description: {description}</h1>
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
