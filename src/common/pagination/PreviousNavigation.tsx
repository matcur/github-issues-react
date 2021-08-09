import React from "react"
import { Navigation } from "./Navigation"

type Props = {
  from: number
  to: number
  current: number
  navigate: (page: number) => void
}

const PreviousNavigation = ({from, to, current, navigate}: Props) => {
  const isAvailable = () => from !== to && from < current

  return (
    <Navigation
      available={isAvailable()}
      onClick={() => navigate(current - 1)}>
      <div className="caret left-caret"/>
      <span className="page-navigation-type previous-page">Previous</span>
    </Navigation>
  )
}

export {PreviousNavigation}