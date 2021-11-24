import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"

import { START_URL, ACTION_URL } from "../utils/urls"

export const game = createSlice({
    name: "game",
    initialState: {
      username: null,
      currentPosition: null,
      // history: [], this can be used to implement a go back functionality
      loading: false,
    },
    reducers: {
      setUsername: (store, action) => {
        store.username = action.payload
      },
      setCurrentPosition: (store, action) => {
        store.currentPosition = action.payload
      },
      // setHistory: (store, action) => {
        // Here you need to continue to work on implementing the "go back" logic
        // what should happen with the array when a user goes back a step?
        // if (store.currentPosition) {
        //  store.history = [...store.history, action.payload]
        //}
      // },
      setLoading: (store, action) => {
        store.loading = action.payload
      },
    },
  })
  
  export const startGame = () => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true))
        fetch(START_URL, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ username: getState().game.username }),
          // We're using getState() to get the value from the state variable username instead of passing it into the thunk as an argument
        })
            .then((res) => res.json())
            .then((json) => {
                dispatch(game.actions.setCurrentPosition(json))
                dispatch(ui.actions.setLoading(false))
            })
    }
}

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction,
      }),
    })
      .then(res => res.json())
      .then(json => {
        dispatch(game.actions.setCurrentPosition(json))
        // dispatch(game.actions.setHistory(data))
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

//export const restart = () => {
//  return initialState
//}
  