import { ResourceApi } from '@quartz/core'

export class FileApi extends ResourceApi {
  resource_url = '/data/file';

  /**
   * Create
   *
   * @param {int} id
   * @param {object} params
   *
   * @return {Promise}
   */
  upload (id, params, progress) {
    return this.post("/" + id + "/upload", params, { 
      progress(e) {
        progress(e);
      },
      headers: { 
        Authorization: 'Bearer ' + this.access_token 
    }}).then((response) => { return this.parse(response) });
  }
};
