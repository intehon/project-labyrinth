import React from "react"
import { useDispatch } from "react-redux"
import { game } from '../reducers/game'
import { startGame } from "../reducers/game.js"

export const Start = () => {
  // const game = useSelector((store) => store.game.gameMessage)
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
          Add your username
          <input type='text' required onChange={handleInputChange} />
        </label>
        <button type='submit'>Lets go</button>
      </form>
    </>
  )
}
