export default function DateUTC(utc) {
  let d = new Date(utc * 1000);

  const weekdays = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(d);

  const dateObj = {
    weekday: weekdays,
    dayNumber: d.getDay() + 1,
    day: d.getDate(),
    month: d.getMonth(),
    year: d.getFullYear(),
  };

  return dateObj;
}
