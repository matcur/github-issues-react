import React, {useEffect, useState} from "react"
import {Repository} from "../../resources/Repository";
import {IssueSortOption} from "./IssueSortOption";
import {DropdownOptionItem} from "../../models";

type Props = {
  repositoryId: number
}

const IssueSortOptions = ({repositoryId}: Props) => {
  const repository = new Repository(repositoryId);
  const [sortOptions, setSortOptions] = useState<{title: string, items: DropdownOptionItem[]}[]>([])

  useEffect(() => {
    async function fetchOptions() {
      setSortOptions([
        {
          title: 'Author',
          items: (await repository.committers()).map(user => ({name: user.name, imgUrl: user.avatarUrl}))
        },
        {
          title: 'Label',
          items: (await repository.tags()).map(tag => ({name: tag.name, imgUrl: ''}))
        },
        {
          title: 'Milestones',
          items: [],
        },
        {
          title: 'Projects',
          items: [],
        },
        {
          title: 'Assignee',
          items: [],
        },
        {
          title: 'Sort',
          items: [],
        }
      ])
    }
    fetchOptions()
  }, [])

  return (
    <div className="sort-options">
      {sortOptions.map((sort, index) => {
        return <IssueSortOption key={index} title={sort.title} options={sort.items}/>
      })}
    </div>
  )
}

export {IssueSortOptions}