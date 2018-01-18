import db from '../../config/database';
import {
  addMessageHelper,
  getAllMessages,
  deleteAllMessagesHelper
} from './messageSQLHelper';
import {
  success,
  error
} from '../../lib/log';
import { deleteAllMessages } from './messageController';

export const addMessageQuery = async (body) => {
  console.log('body in addmess', body);
  try {
    const queryString = addMessageHelper(body);
    const data = await db.queryAsync(queryString);
    success('addMessageQuery - successfully added message ', data);
    console.log('dis data', data);
    return data;
  } catch (err) {
    error('addMessageQuery - error= ', err);
  }
};

export const getMessagesQuery = async () => {
  try {
    const queryString = getAllMessages();
    const data = await db.queryAsync(queryString);
    success('getMessageQuery', data);
    return data;
  } catch (err) {
    error('getMessageQuery', err);
  }
}
export const deleteMessagesQuery = async () => {
  try {
    const queryString = deleteAllMessagesHelper();
    const data = await db.queryAsync(queryString);
    success('deleteMessagequery', data);
    return data;
  } catch (err) {
    error('delteMessQuery', err);
  }
}