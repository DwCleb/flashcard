import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from 'store/ducks/user';

import {
  cleanUserInfo,
  cleanUserMessage,
} from './user';

export default function* rootSaga() {
  return yield all([
    // User
    takeLatest(UserTypes.CLEAN_USER_INFO, cleanUserInfo),
    takeLatest(UserTypes.CLEAN_MESSAGE, cleanUserMessage),

  ]);
}
