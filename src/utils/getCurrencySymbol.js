export const getCurrencySymbol = () => {
  const userToken = JSON?.parse(localStorage.getItem('user-token'));

  const symbol =
    userToken?.currency?.split('.')[1] || userToken?.currency?.split('.')[0];

  return symbol || '$';
};
