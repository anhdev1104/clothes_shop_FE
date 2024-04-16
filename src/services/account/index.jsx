import {
  addAccountApi,
  deleteAccountApi,
  getAccountApi,
  getAccountDetailsApi,
  loginAccountApi,
} from '../../api/accountApi';

export const getAccounts = async accessToken => {
  try {
    const { data } = await getAccountApi(accessToken);
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

export const deleteAccount = async (id, accessToken) => {
  try {
    const { data } = await deleteAccountApi(id, accessToken);
    return data;
  } catch (error) {
    console.log(error);
  }
};
