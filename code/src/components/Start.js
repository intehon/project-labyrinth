import React from "react"
import { useDispatch } from "react-redux"
import { game } from '../reducers/game'
import { startGame } from "../reducers/game"
import Button from '@mui/material/Button'
import styled from 'styled-components'
import maze from '../images/maze.jpg'
// import beginning from '../images/beginning.jpg'
import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField'
import Input from '@mui/material/Input';
// import { borderBottom } from "@mui/system"

const ariaLabel = { 'aria-label': 'description' };


const GameBoard = styled.section`
  background-image: url(${(maze)});
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

// const Form = styled.form`
// display: flex;
// flex-direction: column;
// `
// const Label = styled.label`
// display: flex;
// flex-direction: column;
// padding-bottom: 20px;
// `
// const TextContent = styled.div`
//   display: flex;
//   flex-direction: column;
// `

export const Start = () => {
  const dispatch = useDispatch()

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
          <Content>
            <Container>
              <h1>The Wheel of Time turns, and Ages come and pass, leaving memories that become legend.</h1><p> Legend fades to myth, and even myth is long forgotten when the Age that gave it birth comes again. In one Age, called the Third Age by some, an Age yet to come, an Age long past, a wind rose in the Mountains of Mist. The wind was not the beginning. There are neither beginnings nor endings to the turning of the Wheel of Time. But it was a beginning.</p>
              <h1>This is the beginning of your journey.</h1>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                      '& > :not(style)': { 
                        color: 'info.light', 
                        m: 1, 
                        width: '25ch' 
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <Input
                      placeholder="Enter your name to get started"
                      inputProps={ariaLabel}
                      onChange={handleInputChange}
                      color="info"
                    />
                    <Button
                      variant="contained"
                      color="info"
                      type='submit'
                    >
                      Enter the maze
                    </Button>
                  </Box>
                    
          </Container>  
        </Content>
      </GameBoard>
    </>
  )
}
