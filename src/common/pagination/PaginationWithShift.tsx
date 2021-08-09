import React from "react"
import {PaginationItem} from "./PaginationItem";
import {PaginationShift} from "./PaginationShift";
import {PreviousNavigation} from "./PreviousNavigation";
import {NextNavigation} from "./NextNavigation";

type Props = {
  from: number
  to: number
  current: number
  shift: number
  navigateTo: (page: number) => void
}

const PaginationWithShift = ({from, to, current, shift, navigateTo}: Props) => {
  const shiftPageNumber = from + shift > current ? from + shift : current + shift - 2

  const leftPart = [...Array(shiftPageNumber).keys()].map(i => i + 1)
  const pages = [...leftPart, '...', to - 2, to - 1]

  const pageItem = (pageNumber: number | string, index: number) => {
    if (typeof pageNumber == 'number') {
      return <PaginationItem
        key={index}
        pageNumber={pageNumber}
        currentNumber={current}
        onClick={() => navigateTo(pageNumber)}/>
    }

    return <PaginationShift key={index}/>
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

export {PaginationWithShift}