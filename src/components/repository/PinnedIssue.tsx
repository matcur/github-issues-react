import React from "react"
import {Issue} from "../../models";

type Props = {
  item: Issue
}

const PinnedIssue = ({item}: Props) => {
  return (
    <div className="pinned-issue">
      <div className="pinned-issue-name">
        {item.title}The primary branch has been renamed from "master" to "main"
      </div>
      <div className="pinned-issue-info">
        {item.number}#21767 opened on {item.creationDate.toString()} by {item.author.name}
      </div>
      <div className="pinned-issue-bottom">
        <div className="issue-status-wrapper aic">
          <svg className="pinned-issues-status opened-issue small-svg mr-5">
            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
            <path fillRule="evenodd"
                  d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
          </svg>
          <span className="issue-name">{item.status}</span>
        </div>
        <div className="issue-comment-wrapper aic p-3">
          <svg className="issue-comment-svg small-svg">
            <path className="gray-path" fillRule="evenodd"
                  d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
          </svg>
          <span className="comment-count">3</span>
        </div>
      </div>
    </div>
  )
}

export {PinnedIssue}