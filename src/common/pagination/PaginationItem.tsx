import React from "react"

type Props = {
  pageNumber: number
  currentNumber: number
  onClick: () => void
}

const PaginationItem = ({pageNumber, onClick, currentNumber}: Props) => {
  const page = pageNumber.toString()

  const isCurrent = () => pageNumber === currentNumber

  return (
    <div
      onClick={onClick}
      className={
      `page navigation-padding navigation-hover 
      ${isCurrent()? 'current-page': ''}`
      }>
      <span>{page}</span>
    </div>
  )
}

export {PaginationItem}