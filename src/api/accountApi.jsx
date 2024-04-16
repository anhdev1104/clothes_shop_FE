import instance from './config';

export const getAccountApi = jwtToken =>
  instance.get('/account', {
    headers: {
      token: `Bearer ${jwtToken}`,
    },
  });
export const addAccountApi = newAccount => instance.post('/register', newAccount);
export const loginAccountApi = data => instance.post('/login', data);
export const getAccountDetailsApi = email => instance.get(`/login/${email}`);
export const deleteAccountApi = (id, jwtToken) =>
  instance.delete(`/account/${id}`, {
    headers: {
      token: `Bearer ${jwtToken}`,
    },
  });
