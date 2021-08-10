import React from "react"
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

const Issues = () => {
  const query = useQuery();
  const currentPage = useCurrentPage()
  const {owner, repository} = useParams<{owner: string, repository: string}>()

  const paginationUrl = `/${owner}/${repository}/issues?current-page=:page`

  const jon: User = {name: 'Jon'}
  const comments = [{content: 'The solve', author: jon}, {content: 'The solve', author: jon}]
  const tags = [{name: 'Component: Developer Tools'}, {name: 'Status: Unconfirmed'}, {name: 'Type: Bug'}, {name: 'React'}]
  const issues: Issue[] = [
    {title: '1[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '2[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '3[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '4[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '5[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '6[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '6[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '6[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '6[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
    {title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree', number: 1234, creationDate: new Date(), status: 'open', author: jon, comments, tags},
  ]
  const perPage = 1

  return (
    <div>
      <RepositoryDetails
        owner={owner}
        repository={repository}/>
      <PinnedIssues list={[issues[0]]}/>
      <div className="filter-line container inner-container">
        <IssueFilter/>
        <IssueTagCategories labels={55000} milestones={123}/>
        <NewIssueBtn onClick={() => {}}/>
      </div>
      <IssuesBlock issues={issues.slice(perPage * (currentPage - 1), perPage * currentPage)}/>
      <div className="container">
        <Pagination
          from={1}
          to={Math.ceil(issues.length / perPage)}
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