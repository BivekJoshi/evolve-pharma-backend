const Config = {
    ENVIROMENT: "dev",
    SMTP: {
      HOST: "sandbox.smtp.mailtrap.io",
      PORT: 465,
      USER: "5aa15f3dcfcb44",
      PASS: "4ce386b62f5da7",
      FROM: "noreply@test.com",
      TLS: false,
    },
    DB: {
      PROTOCOL: "mongodb",
      HOST: "127.0.0.1",
      NAME: "evolve-pharma",
      USER: "",
      PWD: "",
      PORT: 27017,
    },
    JWT_SECRET: "XYZABC1234",
  };
  
  module.exports = Config;
  