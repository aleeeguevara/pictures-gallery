/* eslint-disable no-underscore-dangle */
export default class FotoService {
  constructor(resource) {
    this._resource = resource('v1/fotos{/id}');
  }

  async list() {
    const req = await this._resource.query();
    const data = await req.json();
    return data;
  }

  async register(photo) {
    const req = await this._resource.save(photo);
    return req;
  }

  async delete(id) {
    const req = await this._resource.delete({ id });
    return req;
  }
}
