/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: WeekDay): boolean => {
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
};

const today = WeekDay.Sunday;
const tommorow = WeekDay.Monday;

const isTodayWeekend = isWeekend(today);
const isTommorowWeekend = isWeekend(tommorow);

console.log("isTodayWeekend: ", isTodayWeekend);
console.log("isTommorowWeekend: ", isTommorowWeekend);
