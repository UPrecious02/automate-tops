/**
 * Site wide settings. Edit this file to update contact details, social links and personal assets.
 * Any social link left as an empty string is hidden automatically, so nothing on the site points nowhere.
 */
export const site = {
  name: 'John Eyitope',
  title: 'AI Automation & Workflow Specialist',
  domain: 'automateops.online',
  description:
    'John Eyitope designs and builds AI powered automation systems that connect business software, handle repetitive work and turn incoming information into useful action.',

  // TODO: confirm this inbox exists before launch.
  email: 'hello@automateops.online',

  social: {
    linkedin: '', // e.g. https://www.linkedin.com/in/username
    x: '', // e.g. https://x.com/username
    github: '', // e.g. https://github.com/username
  },

  // Drop the portrait into public/images/ and set the path, e.g. '/images/john-eyitope.jpg'.
  // While this is null, a branded placeholder is shown instead.
  portrait: null as string | null,

  certificate: {
    name: 'n8n Professional Certificate',
    issuer: 'n8n Education Team',
    issued: 'October 2026',
    // Public verification link. Leave empty to show the credential without a link.
    verifyUrl: '',
  },
} as const;

export const socialLinks = [
  { label: 'LinkedIn', href: site.social.linkedin },
  { label: 'X', href: site.social.x },
  { label: 'GitHub', href: site.social.github },
].filter((link) => link.href.length > 0);
