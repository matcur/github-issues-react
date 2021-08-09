import React from "react"
import {IssueBlockHeader} from "./IssueBlockHeader";
import {Issue} from "../../models";
import { IssueItem } from "./IssueItem";

type Props = {
  issues: Issue[]
}

const IssuesBlock = ({issues}: Props) => {
  return (
    <div className="container">
      <div className="issues inner-container">
        <IssueBlockHeader openedIssues={555} closedIssues={12123}/>
        <div className="issue-list">
          {issues.map((issue, index) => <IssueItem key={index} item={issue}/>)}
        </div>
      </div>
    </div>
  );
}

export {IssuesBlock}