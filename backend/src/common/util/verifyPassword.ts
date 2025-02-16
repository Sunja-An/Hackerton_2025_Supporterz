import { scrypt } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

async function verifyPassword(
  storedResult: string,
  inputPassword: string,
): Promise<boolean> {
  // 분리된 salt와 hash
  const [salt, storedHash] = storedResult.split('.');

  // 입력 비밀번호를 해싱
  const hash = (await scryptAsync(inputPassword, salt, 32)) as Buffer;

  // 해싱 결과를 hex로 변환 후 비교
  return storedHash === hash.toString('hex');
}

export { verifyPassword };
