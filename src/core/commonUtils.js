export function getToday() {
  const today = new Date();
  return today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
}

export function getHM(date) {
  var minutes = date.getMinutes();
  var hours = date.getHours();
  minutes = minutes.length === 1 ? '0' + hours : minutes;
  hours = hours.length === 1 ? '0' + hours : hours;
  return hours + ':' + minutes
}

export function timeInterval(start, end) {
  if (end - start < 0) return;
  var interval = end - start;
  return Math.round(interval/1000/ 60 / 60*10)/10;
}
