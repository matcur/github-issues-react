import React from "react"
import {PaginationItem} from "./PaginationItem";
import {PaginationShift} from "./PaginationShift";
import {PreviousNavigation} from "./PreviousNavigation";
import {NextNavigation} from "./NextNavigation";
import {range} from "../../utils/range";

type Props = {
  from: number
  to: number
  current: number
  shift: number
  navigateTo: (page: number) => void
}

const PaginationWithShift = ({from, to, current, shift, navigateTo}: Props) => {
  const left = []
  const right = []
  const centre = []
  const leftShift = from + shift
  const rightShift = to - shift

  if (current > leftShift) {
    left.push(...range(from, leftShift - 1), '...')
  } else {
    left.push(...range(from, leftShift + 1))
  }

  if (current > leftShift && current < rightShift) {
    centre.push(...range(current - 1, current + 1))
  }

  if (current < rightShift) {
    right.push('...', ...range(rightShift + 1, to))
  } else {
    right.push(...range(rightShift - 1, to))
  }

  const pages = [...left, ...centre, ...right]

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