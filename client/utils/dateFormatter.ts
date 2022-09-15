export const LOCALE = 'en-EU';

export const DATE_TIME_FORMAT_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const;

const dateFormatter = (dateString: string) => {
  return new Date(dateString).toLocaleDateString(
    LOCALE,
    DATE_TIME_FORMAT_OPTIONS
  );
};

export default dateFormatter;
