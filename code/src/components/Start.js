import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { game } from '../reducers/game'
import { startGame } from "../reducers/game"
import { LoadingIndicator } from './LoadingIndicator'

// Styling
import { Container, ContentWrapper } from '../styling/GlobalStyling'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import maze from '../images/maze.jpg'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'


const ariaLabel = { 'aria-label': 'description' }

const GameBoard = styled.section`
  background-image: url(${(maze)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
  }
`

export const Start = () => {
  const { username } = useSelector(store => store.game)
  const dispatch = useDispatch()
  const loading = useSelector(store => store.ui.loading)

  const handleInputChange = event => {
    dispatch(game.actions.setUsername(event.target.value))
  }

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(startGame())
  } 

  return (
    <>
      <GameBoard>
        {loading && <LoadingIndicator />}
        {!loading && (
            <Container>
              <ContentWrapper>
                <h1>The Wheel of Time turns, and Ages come and pass, leaving memories that become legend.</h1><p> Legend fades to myth, and even myth is long forgotten when the Age that gave it birth comes again. In one Age, called the Third Age by some, an Age yet to come, an Age long past, a wind rose in the Mountains of Mist. The wind was not the beginning. There are neither beginnings nor endings to the turning of the Wheel of Time. But it was a beginning.</p>
                <h2>This is the beginning of your journey.</h2>
                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      sx={{
                        '& > :not(style)': { 
                          color: 'primary.light', 
                          m: 1, 
                          width: '25ch', 
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <Input
                        placeholder="Enter your name to get started"
                        inputProps={ariaLabel}
                        onChange={handleInputChange}
                        color="primary"
                        style={{ fontFamily: 'MedievalSharp', letterSpacing: '1.2px' }}
                        value={username}
                      />
                      <Button
                        variant="contained"
                        disabled={!username}
                        color="primary"
                        type='submit'
                        style={{ fontFamily: 'MedievalSharp', letterSpacing: '2px' }}
                      >
                        Enter the maze
                      </Button>
                    </Box>
            </ContentWrapper>  
          </Container>
        )}
      </GameBoard>
    </>
  )
}
