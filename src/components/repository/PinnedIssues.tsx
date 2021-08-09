import React from "react"
import {Issue} from "../../models";
import {PinnedIssue} from "./PinnedIssue";

type Props = {
  list: Issue[]
}

const PinnedIssues = ({list}: Props) => {
  return (
    <div className="pinned-issues container inner-container">
      <h3 className="pinned-issues-title">Pinned Issues</h3>
      <div className="pinned-issues-list">
        {list.map((issue, index) => <PinnedIssue key={index} item={issue}/>)}
      </div>
    </div>
  )
}

export {PinnedIssues}