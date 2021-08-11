import React, {FormEvent} from "react"

type Props = {
  onFilterChange: (text: string) => void
}

const IssueFilter = ({onFilterChange}: Props) => {
  const onChange = (value: string) => onFilterChange(value)

  return (
    <div className="issue-filter">
      <div className="filters-wrapper">
        <div className="issues-search-form rr-4">
          <div className="hover-element hover-element-border lr-4">
            <span className="filters-span">Filters</span>
            <div className="dropdown-caret"/>
          </div>
          <div className="issues-search-input-wrapper">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
                 width="16" className="octicon octicon-search subnav-search-icon">
              <path className="gray-path" fillRule="evenodd"
                    d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"/>
            </svg>
            <input
              onChange={e => onChange(e.target.value)}
              type="text"
              className="clear-input rr-4 issues-search-input"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export {IssueFilter}