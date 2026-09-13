import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

export const ADMIN_SESSION_COOKIE = 'inheriq_admin_session';

function getAdminSecret() {
  return process.env.ADMIN_SESSION_SECRET || 'inheriq-dev-secret-change-me';
}

function signPayload(payload: string) {
  return createHmac('sha256', getAdminSecret()).update(payload).digest('hex');
}

export function createAdminSession(username: string) {
  const payload = `${username}:${Date.now()}`;
  return `${payload}.${signPayload(payload)}`;
}

export function verifyAdminSession(token: string | undefined) {
  if (!token) return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;

  const expected = signPayload(payload);
  const actual = Buffer.from(signature);
  const expectedBuf = Buffer.from(expected);

  try {
    return actual.length === expectedBuf.length && timingSafeEqual(actual, expectedBuf);
  } catch {
    return false;
  }
}

export function getAdminSessionUser(token: string | undefined) {
  if (!verifyAdminSession(token)) return null;
  const [payload] = (token || '').split('.');
  return payload?.split(':')[0] || null;
}

export async function requireAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  return verifyAdminSession(token) ? getAdminSessionUser(token) : null;
}
