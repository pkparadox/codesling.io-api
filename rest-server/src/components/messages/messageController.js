import {
  addMessageQuery,
  getMessagesQuery
} from './messageQuery';
import {
  success,
  error
} from '../../lib/log';

export const addMessageController = async (req, res) => {
  try {
    console.log('reqbody in messcont',req.body);
    /**
     * 
     */
    const { rows } = await addMessageQuery(req.body);
    console.log('rows on rows', rows);
    success('addMessageController - successfully added Message ', rows[0]);
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('addMessageController - error= ', error);
  }
};

export const getMessagesController = async (req, res) => {
  try {
    const { rows } = await getMessagesQuery();
    console.log('row in rows?', rows.data);
    success('get messages worked, bitch', rows);
    return res.status(200).send(rows);
  } catch (err) {
    error('ooops did not get messages', err);
  }
}

