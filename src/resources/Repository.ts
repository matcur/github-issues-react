import {Api} from "./Api";
import {Tag, User} from "../models";

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
      {name: 'Browser: IE'},
      {name: 'Browser: Safari'},
      {name: 'CLA Signed'},
      {name: 'Component: Build Infrastructure'},
      {name: 'Component: Component API'},
      {name: 'Component: Concurrent Features'},
      {name: 'Component: Core Utilities'},
      {name: 'Component: Developer Tools'},
      {name: 'Component: DOM'},
      {name: 'Component: ESLint Rules'},
      {name: 'Component: Fast Refresh'},
      {name: 'Component: Flight'},
    ]
  }
}