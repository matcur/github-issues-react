import React from "react"
import {PreviousNavigation} from "./PreviousNavigation";
import {NextNavigation} from "./NextNavigation";
import {PaginationItem} from "./PaginationItem";

type Props = {
  from: number
  to: number
  current: number
  navigateTo: (page: number) => void
}

const SimplePagination = ({from, to, current, navigateTo}: Props) => {
  const pages = [...Array(to - from).keys()].map(i => i + 1)

  const pageItem = (page: number, index: number) => {
    return <PaginationItem
      key={index}
      pageNumber={page}
      currentNumber={current}
      onClick={() => navigateTo(page)}/>
  }

  return (
    <div className="pagination">
      <PreviousNavigation
        from={from}
        to={to}
        current={current}
        navigate={navigateTo}/>
      <div className="pages">
        {pages.map((page, index) => pageItem(page, index))}
      </div>
      <NextNavigation
        from={from}
        to={to}
        current={current}
        navigate={navigateTo}/>
    </div>
  )
}

export {SimplePagination}