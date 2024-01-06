"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      backgroundImage: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      files: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      backgroundImage: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      button: {
        populate: true,
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
      overlay: {
        populate: {
          fields: ["content", "contentColor", "color", "colorOpacity"],
          buttons: {
            populate: true,
          },
        },
      },
      videos: {
        populate: true,
      },
      cards: {
        populate: {
          fields: [
            "title",
            "description",
            "borderColor",
            "borderPosition",
            "imageOverlay",
            "imageOverlayOpacity",
            "imagePosition",
          ],
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
