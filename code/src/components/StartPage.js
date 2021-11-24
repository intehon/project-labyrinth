import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGameMessage } from "../reducers/game.js"

export const StartPage = () => {
  const game = useSelector((store) => store.game.gameMessage)
  const dispatch = useDispatch()

  return (
    <>
        <h1>Welcome to the maze</h1>
        <button
            onClick={() => {
                dispatch(fetchGameMessage())
            }}
            >
                FETCH MESSAGE
        </button>
        {game.map((item) => (
            <p key={item.coordinates}>{item.description}</p>
        ))}
    </>
  )
}
