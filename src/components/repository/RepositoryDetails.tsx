import React from "react"
import {RepositoryName} from "./RepositoryName";
import {RepositoryStats} from "./RepositoryStats";
import {RepositoryLinks} from "./RepositoryLinks";
import {RepositoryContribution} from "./RepositoryContribution";

type Props = {
  owner: string
  repository: string
}

const RepositoryDetails = ({owner, repository}: Props) => {
  return (
    <>
      <div className="repository-info container">
        <RepositoryName
          owner={owner}
          repository={repository}/>
        <RepositoryStats stats={{watched: 123213, stars: 3333, forks: 4000}}/>
      </div>
      <RepositoryLinks openedIssues={554} pullRequests={234}/>
      <RepositoryContribution/>
    </>
  )
}

export {RepositoryDetails}