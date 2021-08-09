import React from "react"
import {DropdownOptionItem as Model} from "../../../models";
import {DropdownOptionItem} from "./DropdownOptionItem";

type Props = {
  title: string
  list: Model[]
}

const DropdownOptions = ({title, list}: Props) => {
  const options = list.map(
    (option, index) => <DropdownOptionItem key={index} item={option}/>
  )

  return (
    <div
      className="sort-option-dropdown">
      <div className="dropdown-header">
        <span className="dropdown-filter-name">{title}</span>
        <svg aria-label="Close menu" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true"
             height="16" width="16" className="octicon octicon-x gray-path">
          <path fillRule="evenodd"
                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
        </svg>
      </div>
      <div className="option-items-filter-wrapper">
        <input type="text" placeholder="Filter users" className="option-items-filter clear-input"/>
      </div>
      <div className="option-items">
        {options}
      </div>
    </div>
  )
}

export {DropdownOptions}