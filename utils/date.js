export const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

export const getDayCountingFromMonday = (date) => {
  const day = date.getDay() - 1;
  return day < 0 ? day + 7 : day
}