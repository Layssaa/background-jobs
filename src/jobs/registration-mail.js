import Mail from "../lib/mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "queue test <queue@queue.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Register user",
      html: `Olá ${user.name}, esse é o sistema de filas`,
    });
  },
};
