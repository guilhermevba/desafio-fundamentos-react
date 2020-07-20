const formatValue = (value: number): string => {
  console.log(value);
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export default formatValue;
