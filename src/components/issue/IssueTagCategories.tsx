import React from "react"
import {castToThousands} from "../../utils/castToThousands";

type Props = {
  labels: number
  milestones: number
}

const IssueTagCategories = ({labels, milestones}: Props) => {
  return (
    <div className="tags">
      <div className="tag lr-4 labels hover-element">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
             width="16" className="octicon octicon-tag">
          <path className="gray-path" fillRule="evenodd"
                d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"/>
        </svg>
        <span className="tag-name">Labels</span>
        <div className="link-count">{castToThousands(labels)}</div>
      </div>
      <div className="tag rr-4 milestones hover-element">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
             width="16" className="octicon octicon-tag">
          <path className="gray-path" fillRule="evenodd"
                d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"/>
        </svg>
        <span className="tag-name">Milestones</span>
        <div className="link-count">{castToThousands(milestones)}</div>
      </div>
    </div>
  )
}

export {IssueTagCategories}