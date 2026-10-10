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
    linkedin: 'https://www.linkedin.com/in/temifoluwa-eyitope-a82710387',
    x: 'https://x.com/JohnEyitope',
    github: '', // e.g. https://github.com/username (hidden while empty)
  },

  // Portrait in public/images/. Set to null to show the branded monogram instead.
  portrait: '/images/john-eyitope.webp' as string | null,

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
