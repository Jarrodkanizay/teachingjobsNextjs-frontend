export function formatDate(input: string) {
  if (!input || isNaN(Date.parse(input))) return '';
  const date = new Date(input);
  const options = {
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const,
  };
  return date.toLocaleDateString('en-US', options);
}
