import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"

import { START_URL } from "../utils/urls"

export const game = createSlice({
    name: "game",
    initialState: {
      gameMessage: []
    },
    reducers: {
      setGameMessage: (state, action) => {
        state.gameMessage = [action.payload]
      }
    }
  })
  
  export const fetchGameMessage = () => {

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
                dispatch(game.actions.setGameMessage(json))
                dispatch(ui.actions.setLoading(false))
            })
    }
}
  