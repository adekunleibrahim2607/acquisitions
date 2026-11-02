import arcjet, { detectBot, shield } from '@arcjet/node';

const aj = arcjet({
  key: process.env.ARCJET_KEY, // Get your site key from https://app.arcjet.com
  rules: [
    // Shield protects your app from common attacks such as SQL injection
    shield({ mode: 'LIVE' }),
    // Bot detection: blocks all bots except the ones listed
    detectBot({
      mode: 'LIVE', // Use 'DRY_RUN' to log only
      allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:PREVIEW'],
    }),
  ],
});

export default aj;