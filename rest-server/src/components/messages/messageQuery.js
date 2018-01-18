import db from '../../config/database';
import {
  addMessageHelper
} from './messageSQLHelper';
import {
  success,
  error
} from '../../lib/log';

export const addMessageQuery = async (body) => {
  try {
    const queryString = addMessageHelper(body);
    const data = await db.queryAsync(queryString);
    success('addMessageQuery - successfully added message ', data);
    return data;
  } catch (err) {
    error('addMessageQuery - error= ', err);
  }
};
