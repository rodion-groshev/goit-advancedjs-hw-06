/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Sunday = 1,
  Monday = 0,
  Tuesday = 0,
  Wednesday = 0,
  Thursday = 0,
  Friday = 0,
  Saturday = 1,
}

function isWeekend(day: WeekDays) {
  return Boolean(day)
}

console.log(isWeekend(WeekDays.Friday))