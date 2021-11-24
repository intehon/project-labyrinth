import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { ui } from "./reducers/ui"
import { startPage } from "./reducers/startPage"
import { LoadingIndicator } from "./components/LoadingIndicator"
import { StartPage } from "./components/StartPage"

const reducer = combineReducers({
  ui: ui.reducer,
  startPage: startPage.reducer
});

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <main className="app">
      <StartPage />
      <LoadingIndicator />  
      </main>
    </Provider>
  )
}

// To do
// insert username as input (for the JSON request body)
// present the response action
// respond to user action by sending a POST request to https://wk16-backend.herokuapp.com/action
// insert same username as well as type and direction in the JSON request body
// and so on