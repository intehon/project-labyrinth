import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStartPageMessage } from "../reducers/startPage"

export const StartPage = () => {
  const startPage = useSelector((store) => store.startPage.startPageMessage)
  const dispatch = useDispatch()

  return (
    <>
        <h1>Welcome to the maze</h1>
        <button
            onClick={() => {
                dispatch(fetchStartPageMessage())
            }}
            >
                FETCH MESSAGE
        </button>
        {startPage.map((item) => (
            <p key={item.coordinates}>{item.description}</p>
        ))}
    </>
  )
}
