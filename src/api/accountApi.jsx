import instance from './config';

export const getAccountApi = () => instance.get('/account');
export const addAccountApi = newAccount => instance.post('/register', newAccount);
export const loginAccountApi = data => instance.post('/login', data);
export const getAccountDetailsApi = email => instance.get(`/login/${email}`);
