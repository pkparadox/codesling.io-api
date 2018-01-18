import express from 'express';

import {
  addMessageController,
  getMessagesController
} from './messageController';

const router = express.Router();

router.route('/addMessage')
  .post(addMessageController);
router.route('/getMessages')
  .get(getMessagesController);
export default router;
