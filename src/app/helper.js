const colors = {
  ordinary: 'white',
  rare: '#CD7F32',
  epic: '#ffd700',
  legendary: '#5F0000',
};

export const getColor = (heroClass) => colors[heroClass];

export const estimateItem = ({ gearAttributes }) => gearAttributes.HP + gearAttributes.Defense + gearAttributes.ATK + gearAttributes['Crit Rate'];
