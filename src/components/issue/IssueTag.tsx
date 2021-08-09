import React from "react"

type Props = {
  tagName: string
}

const IssueTag = ({tagName}: Props) => {
  const classes = {
    'Component: Developer Tools': 'component-developer-tools',
    'Status: Unconfirmed': 'status-uncomfirmed',
    'Type: Bug': 'type-bug',
    'React': 'react-version',
  }

  return (
    // @ts-ignore
    <a className={"issue-tag " + classes[tagName]}>
      {tagName}
    </a>
  )
}

export {IssueTag}