import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import { game } from "./reducers/game"
import { ui } from "./reducers/ui"
import { Game } from "./components/Game"

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme'

import Sound from 'react-sound'
import prelude from './sound/prelude.mp3'

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
});

const store = configureStore({ reducer })

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Sound 
        url={prelude}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        autoLoad={true}
        loop={true} 
        />
        <Game />
      </Provider>
    </ThemeProvider>
  )
}