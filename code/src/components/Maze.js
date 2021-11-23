import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMazeMessage } from "../reducers/maze"

export const Maze = () => {
  const maze = useSelector((store) => store.maze.mazeMessage)
  const dispatch = useDispatch()

  console.log("maze", maze)

  return (
    <>
        <h1>Welcome to the maze</h1>
        <button
            onClick={() => {
                dispatch(fetchMazeMessage())
            }}
            >
                FETCH MESSAGE
        </button>
        {maze.map((item) => (
            <p key={item.coordinates}>{item.description}</p>
        ))}
    </>
  )
}
