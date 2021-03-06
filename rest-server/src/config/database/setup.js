import {
  createDatabase,
  createUserTable,
  createChallengeTable,
  createHistoryTable,
  createTestCaseTable,
  // createSabotageTable,
  createFriendTable,
  createUsersChallengesTable,
  dropDatabase,
  dropUserTable,
  dropChallengeTable,
  dropHistoryTable,
  dropTestCaseTable,
  // dropSabotageTable,
  dropFriendTable,
  dropUsersChallengesTable,
  useDatabase,
  createMessageTable,
  dropMessageTable
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();
  await dropUsersChallengesTable();
  await dropHistoryTable();
  await dropTestCaseTable();
  await dropFriendTable();
  await dropUserTable();
  await dropChallengeTable();
  await dropMessageTable();
  // await dropSabotageTable();
  await createDatabase();
  await createUserTable();
  await createChallengeTable();
  await createHistoryTable();
  await createTestCaseTable();
  await createFriendTable();
  await createUsersChallengesTable();
  await createMessageTable();
  // await createSabotageTable();
  process.exit();
};

setup();
