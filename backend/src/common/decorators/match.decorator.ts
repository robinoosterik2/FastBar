import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function Match(property: string, validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string): void {
    registerDecorator({
      name: 'match',
      target: object.constructor,
      propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: unknown, args: ValidationArguments): boolean {
          // Safe access to constraints array with type checking
          const relatedPropertyName = args.constraints?.[0] as unknown;
          if (typeof relatedPropertyName !== 'string') {
            return false;
          }

          const targetObject = args.object as Record<string, unknown>;
          const relatedValue = targetObject[relatedPropertyName];

          return (
            typeof value === 'string' &&
            typeof relatedValue === 'string' &&
            value === relatedValue
          );
        },
        defaultMessage(args: ValidationArguments): string {
          // Safe access to constraints array with type checking
          const relatedPropertyName = args.constraints?.[0] as unknown;
          if (typeof relatedPropertyName === 'string') {
            return `${args.property} must match ${relatedPropertyName}`;
          }
          return `${args.property} must match the specified field`;
        },
      },
    });
  };
}
