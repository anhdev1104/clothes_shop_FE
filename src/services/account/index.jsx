import { addAccountApi, getAccountApi, getAccountDetailsApi, loginAccountApi } from '../../api/accountApi';

export const getAccount = async () => {
  try {
    const { data } = await getAccountApi();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addAccount = async newAccount => {
  const { data } = await addAccountApi(newAccount);
  return data;
};

export const loginAccount = async dataLogin => {
  const { data } = await loginAccountApi(dataLogin);
  return data;
};

export const getAccountDetails = async email => {
  try {
    const { data } = await getAccountDetailsApi(email);
    return data;
  } catch (error) {
    console.log(error);
  }
};
