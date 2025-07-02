// decorators/to-lowercase.decorator.ts
import { Transform } from 'class-transformer';

export function ToLowerCase() {
  return Transform(({ value }): string =>
    typeof value === 'string' ? value.toLowerCase() : value,
  );
}
