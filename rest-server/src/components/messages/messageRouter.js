import express from 'express';

import {
  addMessageController,
  getMessagesController,
  deleteAllMessages
} from './messageController';

const router = express.Router();

router.route('/addMessage')
  .post(addMessageController);
router.route('/getMessages')
  .get(getMessagesController);
router.route('/deleteMessages')
  .delete(deleteAllMessages);
export default router;
