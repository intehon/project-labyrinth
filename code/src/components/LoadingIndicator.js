import React from "react"
import Lottie from "react-lottie"
import animationData from "../animations/quest-crew"
import { useSelector } from "react-redux"
import styled from 'styled-components'

const Loader = styled.div`
  position: absolute;
`

export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.ui.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <Loader>
      {loading && <Lottie options={defaultOptions} height={400} width={400} />}
    </Loader>
  )
}
