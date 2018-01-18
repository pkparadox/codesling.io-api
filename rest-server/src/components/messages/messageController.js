import {
  addMessageQuery
} from './messageQuery';
import {
  success,
  error
} from '../../lib/log';

export const addMessageController = async (req, res) => {
  try {
    /**
     * 
     */
    const { rows } = await addMessageQuery(req.body);
    success('addMessageController - successfully added Message ', rows[0]);
    req.body.message_id = rows[0].id;
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('addMessageController - error= ', error);
  }
};

