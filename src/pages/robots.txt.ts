import { SITE } from '../consts.js';

export async function GET() {
  // Discourage all search engines from indexing the site.
  const body = `User-agent: *
Disallow: /
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
