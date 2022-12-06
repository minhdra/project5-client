import instance from './axios';

export const sendContact = async (data) => (await instance.post('/email/send-contact', {
  ...data
}));

export const verifyAccount = async (data) => (await instance.post('/email/verify-account', {
  ...data
}));

