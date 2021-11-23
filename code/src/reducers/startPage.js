import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"

import { START_URL } from "../utils/urls"

export const startPage = createSlice({
    name: "startPage",
    initialState: {
      startPageMessage: []
    },
    reducers: {
      setStartPageMessage: (state, action) => {
        state.startPageMessage = [action.payload]
      }
    }
  })
  
  export const fetchStartPageMessage = () => {

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
                dispatch(startPage.actions.setStartPageMessage(json))
                dispatch(ui.actions.setLoading(false))
            })
    }
}
  