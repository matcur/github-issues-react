import React from "react"
import {DropdownOptions} from "../../common/dropdown/options";
import {DropdownOptionItem} from "../../models";

type Props = {
  title: string
  options: DropdownOptionItem[]
}

const IssueSortOption = ({title, options}: Props) => {
  return (
    <div className="sort-option">
      <div className="sort-option-name">{title}</div>
      <div className="dropdown-caret"/>
      <DropdownOptions
        title={title}
        list={options}/>
    </div>
  )
}

export {IssueSortOption}