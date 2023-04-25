import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/VoidHack.webp';

export const siteConfig: Site.Config = {
  url: 'https://VoidHacker.com',
  title: 'VoidHack',
  subtitle: 'Hacking Your Void.',
  description: 'The world as it is drawn at a leisurely pace.',
  lang: 'ja',
  timeZone: 'Asia/Tokyo',
  since: 2023,
  cover: SiteCover,
  author: {
    name: 'Nich87',
    status: '🤔',
    statusTip:'<a href="https://github.com/Nich87/" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >Github</a>',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://VoidHacker.com/',
    github: 'https://github.com/Nich87/',
    email: 'contact@VoidHacker.com',
    bio: `よくTwitterにいます <br/> With a Twitter.`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/Nich87'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'ja-JP',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'ja-JP',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: true,
  id: 'giscus-comment',
  repo: 'Nich87/VoidHack',
  repoId: 'R_kgDOI7ZDfg',
  category: 'General',
  categoryId: 'DIC_kwDOI7ZDfs4CUEz1',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'ja',
  'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/Contact',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/const_root/',
    rel: 'external'
  }
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
  {
    name: '👀About',
    url: '/about',
  },
  {
    name: '📨Contact',
    url: '/Contact',
  },
  {
    name: '🐤Twitter',
    url: 'https://twitter.com/const_root/',
    rel: 'external'
  }
  ],
};
