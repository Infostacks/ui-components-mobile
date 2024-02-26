import react from 'react';

const GetInitials = (name: any) => {
  const names = name.split(' ');
  return names
    .map((n: any) => n[0])
    .join('')
    .toUpperCase();
};
export default GetInitials;
