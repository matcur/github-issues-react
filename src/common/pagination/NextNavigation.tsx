import React from "react"
import {Navigation} from "./Navigation";

type Props = {
  from: number
  to: number
  current: number
  navigate: (page: number) => void
}

const NextNavigation = ({from, to, current, navigate}: Props) => {
  const isAvailable = () => from !== to && to > current

  return (
    <Navigation
      available={isAvailable()}
      onClick={() => navigate(current + 1)}>
      <span className="page-navigation-type next-page">Next</span>
      <div className="caret right-caret"/>
    </Navigation>
  )
}

export {NextNavigation}