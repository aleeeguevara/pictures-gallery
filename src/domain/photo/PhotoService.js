/* eslint-disable no-underscore-dangle */
export default class FotoService {
  constructor(resource) {
    this._resource = resource('v1/fotos{/id}');
  }

  async list() {
    try {
      const req = await this._resource.query();
      const data = await req.json();
      return data;
    } catch (err) {
      console.log(err);
      throw new Error('Sorry, we are having some issues, try again later!');
    }
  }

  async register(photo) {
    if (photo._id) {
      const req = await this._resource.update({ id: photo._id }, photo);
      return req;
    }
    const req = await this._resource.save(photo);
    return req;
  }

  async delete(id) {
    try {
      const req = await this._resource.delete({ id });
      return req;
    } catch (err) {
      console.log(err);
      throw new Error('Sorry, we were not able to delete the chosen picture');
    }
  }

  async getDataById(id) {
    const req = await this._resource.query({ id });
    const data = await req.json();
    return data;
  }
}
