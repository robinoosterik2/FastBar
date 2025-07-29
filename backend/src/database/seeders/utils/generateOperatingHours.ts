import { faker } from '@faker-js/faker';

export function generateOperatingHours(): string {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  const json = {};
  for (const day of days) {
    const start = new Date().setUTCHours(0, 0, 0, 0);
    const end = faker.date.between({
      from: start,
      to: new Date().setUTCHours(23, 59, 59, 999),
    });
    json[day] = {
      open: faker.date.between({
        from: start,
        to: end,
      }),
      close: end,
    };
  }
  return JSON.stringify(json);
}
