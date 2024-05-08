"use strict";

/**
 * `about-page-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In about-page-populate middleware.");
    ctx.query = {
      populate: {
        aboutLists: {
          populate: true,
        },
        aboutTableData: {
          populate: true,
        },
        aboutCards: {
          populate: {
            icon: {
              populate: true,
            }
          },
        }
      },
      ...ctx.query,
    };
    await next();
  };
};
