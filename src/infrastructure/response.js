import Fetch from 'node-fetch';


export default {

  async fetch(uri) {
    const response = await Fetch(uri);
    if (!response.ok) {
      const err = new Error(response.statusText);
      err.status = response.status;
      err.body = response.json() || {};
      throw err;
    }
    return await response.json();
  }
}
