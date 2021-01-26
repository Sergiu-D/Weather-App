export default function dateUTC(utc) {
  let d = new Date(utc * 1000);

  const dateObj = {
    weekday: d.getDay() + 1,
    day: d.getDate(),
    month: d.getMonth(),
    year: d.getFullYear(),
  };

  return dateObj;
}
