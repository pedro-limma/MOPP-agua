const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { title, description } = request.body;

    await connection('notices').insert({
      title,
      description
    })
  }
}