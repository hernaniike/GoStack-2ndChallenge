import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const teste = await Recipient.create(req.body);
    return res.json(teste);
  }
}

export default new RecipientController();
