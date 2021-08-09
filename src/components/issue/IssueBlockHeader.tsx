import React from "react"
import {IssueSortOptions} from "./IssueSortOptions";

type Props = {
  openedIssues: number
  closedIssues: number
}

const IssueBlockHeader = ({openedIssues, closedIssues}: Props) => {
  return (
    <div className="issues-header">
      <div className="issues-status-info">
        <a href="#" className="opened-issues issue-status">
          <svg className="octicon octicon-issue-opened mr-5" viewBox="0 0 16 16" version="1.1" width="16"
               height="16" aria-hidden="true">
            <path className="gray-path" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
            <path className="gray-path" fillRule="evenodd"
                  d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
          </svg>
          <span>{openedIssues} Opened</span>
        </a>
        <a href="#" className="closed-issues issue-status mr-5">
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
               width="16" className="octicon octicon-check">
            <path className="gray-path" fillRule="evenodd"
                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
          </svg>
          <span>{closedIssues} Closed</span>
        </a>
      </div>
      <IssueSortOptions repositoryId={1}/>
    </div>
  )
}

export {IssueBlockHeader}