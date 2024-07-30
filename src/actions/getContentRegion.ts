'use server';
export async function getContentRegion() {
  const auBusinessHours = { start: 9, end: 18 }; // Australia Eastern Time

  const auTime = getCurrentTime('Australia/Sydney');

  const isAuBusinessTime = isWithinBusinessHours(auTime, auBusinessHours);

  if (isAuBusinessTime) return 'AU';
  return 'USA';
}

const getCurrentTime = (timezone: string): Date => {
  return new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));
};

const isWithinBusinessHours = (
  date: Date,
  businessHours: { start: number; end: number }
): boolean => {
  const hours = date.getHours();
  return hours >= businessHours.start && hours < businessHours.end;
};
