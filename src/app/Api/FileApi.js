import { ResourceApi } from '@railken/quartz-core'

export class FileApi extends ResourceApi {
  resource_url = '/admin/files';

  /**
   * Create
   *
   * @param {int} id
   * @param {object} params
   *
   * @return {Promise}
   */
  upload (id, params, progress) {
    return this.post(this.getFullUrl() + "/" + id + "/upload", params, { 
      progress(e) {
        progress(e);
      },
      headers: { 
        Authorization: 'Bearer ' + this.access_token 
    }}).then((response) => { return this.parse(response) });
  }
};
