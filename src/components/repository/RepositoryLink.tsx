import React from "react"
import {RepositoryLink as Model} from "../../models";

type Props = {
  item: Model
}

const RepositoryLink = ({item}: Props) => {
  return (
    <li className="repository-link">
      {item.svg}
      <span className="repository-link-name">{item.name}</span>
      <span className="link-count">{item.count}</span>
    </li>
  )
}

export {RepositoryLink}