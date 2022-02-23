import Mail from "../lib/mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const {
      user: { name, email },
    } = data;
    
    await Mail.sendMail({
      from: "queue test <queue@queue.com>",
      to: `${name} <${email}>`,
      sub: "Register user",
      html: `Olá`,
    });
  },
};
