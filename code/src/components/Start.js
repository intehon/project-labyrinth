import React from "react"
import { useDispatch } from "react-redux"
import { game } from '../reducers/game'
import { startGame } from "../reducers/game"
import Button from '@mui/material/Button'

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
        <h1>Welcome to the maze!</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Enter your name to get started
          <input type='text' required onChange={handleInputChange} />
        </label>
        <Button variant="contained" type='submit'>Enter the labyrinth</Button>
      </form>
    </>
  )
}
