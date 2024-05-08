"use strict";

/**
 * `clinic-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In clinic-populate middleware.");
    ctx.query = {
      populate: {
        image: {
          populate: true,
        },
        services: {
          populate: true,
        }
      },
      ...ctx.query,
    };
    await next();
  };
};
