import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"

import { START_URL } from "../utils/urls"

export const maze = createSlice({
    name: "maze",
    initialState: {
      mazeMessage: []
    },
    reducers: {
      setMazeMessage: (state, action) => {
        state.mazeMessage = [action.payload]
      }
    }
  })
  
  export const fetchMazeMessage = () => {

    const options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        "username": "ReadyTechnigoPlayerOne",
        }),
    }

    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch(START_URL, options)
            .then((res) => res.json())
            .then((json) => {
                dispatch(maze.actions.setMazeMessage(json))
                dispatch(ui.actions.setLoading(false))
            })
    }
}
  