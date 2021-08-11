import React, {useEffect, useState} from "react"
import {useHistory, useParams } from "react-router-dom"
import {RepositoryName} from "../components/repository/RepositoryName";
import {RepositoryStats} from "../components/repository/RepositoryStats";
import {RepositoryLinks} from "../components/repository/RepositoryLinks";
import {RepositoryContribution} from "../components/repository/RepositoryContribution";
import {PinnedIssues} from "../components/repository/PinnedIssues";
import { Issue, User } from "../models";
import {IssueFilter} from "../components/issue/IssueFilter";
import {IssueTagCategories} from "../components/issue/IssueTagCategories";
import {NewIssueBtn} from "../components/issue/NewIssueBtn";
import {IssuesBlock} from "../components/issue/IssuesBlock";
import {Pagination} from "../common/pagination";
import { useQuery } from "../hooks/useQuery";
import {useCurrentPage} from "../hooks/useCurrentPage";
import {TipBlock} from "../common/TipBlock";
import {RepositoryDetails} from "../components/repository/RepositoryDetails";
import {Repository} from "../resources/Repository";
import {nullIssue} from "../nullobjects";

const Issues = () => {
  const query = useQuery();
  const currentPage = useCurrentPage()
  const {owner, repository} = useParams<{owner: string, repository: string}>()

  const [issues, setIssues] = useState<Issue[]>([nullIssue])
  const [filterText, setFilterText] =useState('')

  const filter = (value: string) => {
    return issues.filter(
      issue => issue.title.indexOf(value) !== -1
    )
  }
  const paginationUrl = `/${owner}/${repository}/issues?current-page=:page`
  const perPage = 2
  const filtered = filter(filterText)

  useEffect(() => {
    async function load() {
      setIssues(
        await new Repository(1).issues()
      )
    }

    load()
  }, [])

  return (
    <div>
      <RepositoryDetails
        owner={owner}
        repository={repository}/>
      <PinnedIssues list={[issues[0]]}/>
      <div className="filter-line container inner-container">
        <IssueFilter
          onFilterChange={setFilterText}/>
        <IssueTagCategories labels={55000} milestones={123}/>
        <NewIssueBtn onClick={() => {}}/>
      </div>
      <IssuesBlock issues={filtered.slice(perPage * (currentPage - 1), perPage * currentPage)}/>
      <div className="container">
        <Pagination
          from={1}
          to={Math.ceil(filtered.length / perPage)}
          current={currentPage}
          urlFormat={paginationUrl}/>
      </div>
      <TipBlock/>
      <div className="container">
        <div className="split-line"/>
      </div>
    </div>
  )
}

export {Issues}