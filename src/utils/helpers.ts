export function truncateUsername(username: string, upto: number) {
  if (!username) return '';
  if (username.length < upto) return username;
  return (username.substring(0, upto) + '...');
}



