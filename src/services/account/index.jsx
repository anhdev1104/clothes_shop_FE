import { addAccountApi, getAccountApi } from '../../api/accountApi';

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
