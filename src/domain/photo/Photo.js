// model of photo. Abstracting something of the real world

export default class Photo {
  constructor(titulo = '', url = '', descricao = '') {
    this.titulo = titulo;
    this.url = url;
    this.descricao = descricao;
  }
}
