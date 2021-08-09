import React from "react"

type Props = {
  onClick: () => void
}

const NewIssueBtn = ({onClick}: Props) => {
  return (
    <div className="new-issue">
      <button
        onClick={onClick}
        className="btn btn-green">New Issue</button>
    </div>
  )
}

export {NewIssueBtn}