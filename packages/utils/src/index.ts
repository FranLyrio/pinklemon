import { User } from '@sprout/types';

export function greetUser(user: User): string {
  return `Olá, ${user.name}!`;
}
