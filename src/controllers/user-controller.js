import Queue from "../lib/queue";

export default {
  async store(req, res) {
    console.log(req.url);
    const { name, email, password } = req.body;

    //create user in database
    const user = {
      name,
      email,
      password,
    };

    // adicionar jobs registration na fila
    // enviar objeto do usuário
    await Queue.add("RegistrationMail", { user });

    res.json(user);
  },
};
