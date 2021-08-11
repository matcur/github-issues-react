import {Issue, User} from "./models";

export const nullUser: User = {
  name: ''
}

export const nullIssue: Issue = {
  title: '',
  number: -1,
  creationDate: new Date(),
  author: nullUser,
  status: 'closed',
  tags: [],
  comments: [],
}