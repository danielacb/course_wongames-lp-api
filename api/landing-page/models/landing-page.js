"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require("axios");
const netlifyWebhook = strapi.config.get("custom.netlifyWebhook");

module.exports = {
  lifecycles: {
    async afterCreate(_, __) {
      netlifyWebhook &&
        axios.post(
          "https://api.netlify.com/build_hooks/61185b10fc2c0b6a946c6561"
        );
    },
    async afterUpdate(_, __, ___) {
      netlifyWebhook &&
        axios.post(
          "https://api.netlify.com/build_hooks/61185b10fc2c0b6a946c6561"
        );
    },
  },
};
