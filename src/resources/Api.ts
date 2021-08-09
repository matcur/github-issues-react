export class Api {
  apiUrl = 'localhost:3000/'

  async get<TOut>(resource: string): Promise<TOut> {
    return fetch(this.apiUrl + resource, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        return res.json() as Promise<TOut>
      })
  }

  async post<TOut>(resource: string): Promise<TOut> {
    return fetch(this.apiUrl + resource, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        return res.json() as Promise<TOut>
      })
  }
}