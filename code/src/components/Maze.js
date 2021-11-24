import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextStep } from '../reducers/game'
import {End } from './End'
import styled from 'styled-components'

const GameBoard = styled.section`
    background-image: url(${(props) => props.url});

`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
`


export const Maze = () => {
    const { description, coordinates, actions } = useSelector(store => store.game.currentPosition)
    const dispatch = useDispatch()

    const handleButtonClick = (type, direction) => {
        // call the api, pass along type and direction to use as part of the body
        dispatch(nextStep(type, direction))
    }

    const ActionCard = ({ description, type, direction }) => (
        <div className='action-card'>
            <p>{description}</p>
            <button onClick={() => handleButtonClick(type, direction)}>
                {type} {direction.toLowerCase()}
            </button>
        </div>
    )

    return (
        <GameBoard>
            <Content>
                {actions.length !== 0 && 
                <div>
                    <h1>Current description: {description}</h1>
                    <p>Your current position: {coordinates}</p>
                </div>
                } 
                {actions.length === 0 ? <End /> :
                actions.length > 0 && actions.map(item => <ActionCard key={item.direction} {...item} />)}
            </Content>
        </GameBoard>
    )
}
