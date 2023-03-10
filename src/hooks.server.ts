import type { Handle } from '@sveltejs/kit';
import { siteConfig } from '$config/site';

export const handle: Handle = async ({ event, resolve }) =>
  await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('<html lang="ja">', `<html lang="${siteConfig.lang ?? 'ja'}">`),
  });
