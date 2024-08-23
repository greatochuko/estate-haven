export function formatDateDuration(date: string) {
  let duration =
    (new Date(Date.now()).getTime() - new Date(date).getTime()) / 1000 / 60;
  let suffix = "mins";
  if (duration > 60) {
    duration = duration / 60;
    suffix = duration >= 2 ? "hours" : "hour";
  }
  if (duration > 24) {
    duration = duration / 24;
    suffix = duration >= 2 ? "days" : "day";
  }
  if (duration > 7) {
    duration = duration / 7;
    suffix = duration >= 2 ? "weeks" : "week";
  }
  if (duration > 4.3) {
    duration = duration / 4.3;
    suffix = duration >= 2 ? "months" : "month";
  }
  if (duration > 12) {
    duration = duration / 12;
    suffix = duration >= 2 ? "years" : "year";
  }
  return `${duration.toFixed()} ${suffix}`;
}
