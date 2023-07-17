const colors = {
  ordinary: 'white',
  rare: '#CD7F32',
  epic: '#ffd700',
  legendary: '#5F0000',
};

export const getColor = (heroClass) => colors[heroClass];

export const estimateItem = ({ gearAttributes }) => gearAttributes.HP + gearAttributes.Defense + gearAttributes.ATK + gearAttributes['Crit Rate'];

export const paginate = (page, ipp, arr) => {
  const totalPages = Math.ceil(arr.length / ipp);
  const start = (((page <= totalPages) ? page : totalPages) - 1) * ipp;
  const end = start + ipp;

  return arr.slice(start, end);
};
