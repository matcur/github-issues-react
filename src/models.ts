export type RepositoryStats = {
  watched: number
  stars: number
  forks: number
}

export type Issue = {
  title: string
  number: number
  creationDate: Date
  author: User
  status: IssueStatus
  tags: Tag[]
  comments: Comment[]
}

export type User = {
  name: string
  avatarUrl?: string
}

export type RepositoryLink = {
  name: string,
  count: string | number,
  svg: JSX.Element
}

export type Tag = {
  name: string
}

export type Comment = {
  content: string
  author: User
}

export type DropdownOptionItem = {
  name: string
  imgUrl?: string
}

export type IssueStatus = 'open' | 'closed'