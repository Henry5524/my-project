"use strict";

/**
 * clinic router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::clinic.clinic", {
  config: {
    find: {
      middlewares: ["api::clinic.clinic-populate"],
    },
    findOne: {
      middlewares: ["api::clinic.clinic-populate"],
    },
  },
});
