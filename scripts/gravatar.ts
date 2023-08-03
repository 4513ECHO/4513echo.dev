import { crypto, toHashString } from "$std/crypto/mod.ts";

const encoder = new TextEncoder();

export async function createUrl(
  email: string,
  options?: { size?: number },
): Promise<string> {
  const hash = await crypto.subtle.digest("MD5", encoder.encode(email));
  const searchParams = options?.size ? `?s=${options.size}` : "";
  return `https://www.gravatar.com/avatar/${toHashString(hash)}${searchParams}`;
}

export const iconUrl = await createUrl("mail@4513echo.dev", { size: 1024 });
