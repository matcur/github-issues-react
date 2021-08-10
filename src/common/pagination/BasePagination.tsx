import React from "react"
import {PreviousNavigation} from "./PreviousNavigation";
import {NextNavigation} from "./NextNavigation";


type Props = {
  from: number
  to: number
  current: number
  shift: number
  navigateTo: (page: number) => void
  pages: JSX.Element[]
}

const BasePagination = ({from, to, current, pages, navigateTo}: Props) => {
  return (
    <div className="pagination">
      <PreviousNavigation
        from={from}
        to={to}
        current={current}
        navigate={navigateTo}/>
      <div className="pages">
        {pages}
      </div>
      <NextNavigation
        from={from}
        to={to}
        current={current}
        navigate={navigateTo}/>
    </div>
  )
}

export {BasePagination}