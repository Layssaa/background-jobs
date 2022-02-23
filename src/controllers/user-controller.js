import Mail from "../lib/mail";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    //create user in database
    const user = {
      name,
      email,
      password,
    };

    //adicionar jobs registration na fila

    res.json(user);
  },
};
