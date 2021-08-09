import React from "react"
import {DropdownOptionItem as Model} from "../../../models";

type Props = {
  item: Model
}

const DropdownOptionItem = ({item}: Props) => {
  return (
    <div className="option-item">
      <img src={item.imgUrl} alt=""
           className="option-item-img user-avatar small-avatar"/>
      <div className="option-item-name">{item.name}</div>
    </div>
  )
}

export {DropdownOptionItem}