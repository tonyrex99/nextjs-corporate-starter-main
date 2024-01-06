module.exports = ({ env }) => ({
  "duplicate-button": true,
  //"color-picker": true,
  seo: {
    enabled: true,
  },
  publisher: {
    enabled: true,
    config: {
      hooks: {
        beforePublish: async ({ strapi, uid, entity }) => {
          console.log("beforePublish");
        },
        afterPublish: async ({ strapi, uid, entity }) => {
          console.log("afterPublish");
        },
        beforeUnpublish: async ({ strapi, uid, entity }) => {
          console.log("beforeUnpublish");
        },
        afterUnpublish: async ({ strapi, uid, entity }) => {
          console.log("afterUnpublish");
        },
      },
    },
  },
  upload: {
    config: {
      provider: "strapi4-ftp-provider",
      providerOptions: {
        host: env("FTP_HOST"),
        port: env("FTP_PORT"),
        user: env("FTP_USER"),
        password: env("FTP_PASSWORD"),
        secure: env.bool("FTP_SECURE", false),
        path: env("FTP_BASE_PATH"),
        baseUrl: env("FTP_BASE_URL"),
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "mail.rccgprovidencecourt.org"),
        port: env("SMTP_PORT", 465),
        auth: {
          user: env("SMTP_USERNAME", "rccgprov"),
          pass: env("SMTP_PASSWORD", "9Bx7P@w3pJM.s3"),
        },
        secure: false,
      },
      settings: {
        defaultFrom: "support@admin.rccgprovidencecourt.org",
        defaultReplyTo: "support@admin.rccgprovidencecourt.org",
      },
    },
  },
});
