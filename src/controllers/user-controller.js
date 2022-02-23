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

    await Mail.sendMail({
      from: "queue test <queue@queue.com>",
      to: `${name} <${email}>`,
      sub: "Register user",
      html: `Olá`,
    });
    res.json(user);
  },
};
