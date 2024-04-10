import instance from './config';

export const getAccountApi = () => instance.get('/register');
export const addAccountApi = newAccount => instance.post('/register', newAccount);
