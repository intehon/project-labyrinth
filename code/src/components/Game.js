import React from 'react'
import { useSelector } from 'react-redux'

import { Start } from './Start'
import { Maze } from './Maze'
import { LoadingIndicator } from './LoadingIndicator'

export const Game = () => {
  const currentPosition = useSelector(store => store.game.currentPosition)

  return (
    <>
      {currentPosition ? <Maze /> : <Start />}
      <LoadingIndicator />
    </>
  )
}