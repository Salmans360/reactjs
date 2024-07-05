import jwt from 'jsonwebtoken';

const userToken = localStorage.getItem('user-token');

const TokenData = {
  if(userToken) {
    return jwt.decode(userToken);
  },
};

export default TokenData;
