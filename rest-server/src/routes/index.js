import express from 'express';

import authRouter from '../components/auth/authRouter';
import userRouter from '../components/users/userRouter';
import friendRouter from '../components/friends/friendsRouter';
import challengeRouter from '../components/challenges/challengeRouter';
import userChallengeRouter from '../components/usersChallenges/usersChallengesRouter';
import testCasesRouter from '../components/testCases/testCasesRouter';
import messageRouter from '../components/messages/messageRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/friends', friendRouter);
router.use('/challenges', challengeRouter);
router.use('/usersChallenges', userChallengeRouter);
router.use('/testCases', testCasesRouter);
router.use('/messages', messageRouter);

export default router;
