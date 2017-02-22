import { fetch } from './infrastructure/response';

export default class {

  constructor(baseUrl = 'http://www.clashapi.xyz') {
    this.uri = `${baseUrl}/api/players`;
  }

  async all() {
    return fetch(this.uri);
  }

  async find(id) {
    return await fetch(`${this.uri}/${id}`);
  }

}
