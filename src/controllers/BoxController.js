const Box = require('../models/box')

class BoxController {
  async store(req, res){
    const box = await Box.create({ title: 'Rocketseat' })
    return res.json(Box)
  }
}

module.exports = new BoxController()