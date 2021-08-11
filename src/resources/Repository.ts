import {Api} from "./Api";
import {Issue, Tag, User} from "../models";

export class Repository {
  api = new Api()

  constructor(private id: number) { }

  async committers(): Promise<User[]> {
    return [
      {name: 'matsur'},
      {name: 'json'},
      {name: 'json'},
      {name: 'json'},
      {name: 'json'},
      {name: 'json'}
    ]
  }

  async tags(): Promise<Tag[]> {
    return [
      {name: 'Component: Developer Tools'},
      {name: 'Status: Unconfirmed'},
      {name: 'Type: Bug'},
      {name: 'React'},
    ]
  }
  
  async issues(): Promise<Issue[]> {
    const jon: User = {name: 'Jon'}
    const comments = [{content: 'The solve', author: jon}, {content: 'The solve', author: jon}]
    const tags = await this.tags()

    return [
      {
        title: '1[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '2[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '3[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '4[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '5[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '6[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '6[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '6[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '6[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
      {
        title: '7[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree',
        number: 1234,
        creationDate: new Date(),
        status: 'open',
        author: jon,
        comments,
        tags
      },
    ];
  }
}