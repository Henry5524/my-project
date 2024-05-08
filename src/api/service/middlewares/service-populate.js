"use strict";

/**
 * `service-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In service-populate middleware.");
    ctx.query = {
      populate: {
        name: {
          populate: true,
        },
        top: {
          populate: true,
        },
        parent: {
          populate: true,
        },
      },
      ...ctx.query,
    };
    await next();
  };
};
