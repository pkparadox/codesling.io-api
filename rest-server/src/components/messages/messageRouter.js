import express from 'express';

import {
  addMessageController
} from './messageController';

const router = express.Router();

router.route('/addMessage')
  .post(addMessageController);

export default router;
