import React from "react"
import {PaginationItem} from "./PaginationItem";
import {PaginationShift} from "./PaginationShift";
import {PreviousNavigation} from "./PreviousNavigation";
import {NextNavigation} from "./NextNavigation";
import {useHistory} from "react-router-dom";
import {PaginationWithShift} from "./PaginationWithShift";
import {SimplePagination} from "./SimplePagination";

type Props = {
  from: number
  to: number
  current: number
  urlFormat: string
}

/**
 *  @var from includes
 *  @var to excludes
 *  @var urlFormat must contains ':page'
 *  Example: /some-resource?page=:page
 */
const Pagination = ({from, to, current, urlFormat}: Props) => {
  const history = useHistory()
  const shift = 3

  const navigateTo = (page: number) => {
    history.push(
      urlFormat.replace(':page', page.toString())
    )
  }

  return (<PaginationWithShift
    from={from}
    to={to}
    current={current}
    shift={shift}
    navigateTo={navigateTo}/>)
}

export {Pagination}