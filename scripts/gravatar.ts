import { crypto, toHashString } from "$std/crypto/mod.ts";

const encoder = new TextEncoder();

export async function createUrl(email: string): Promise<string> {
  const hash = await crypto.subtle.digest("MD5", encoder.encode(email));
  return `https://www.gravatar.com/avatar/${toHashString(hash)}`;
}
