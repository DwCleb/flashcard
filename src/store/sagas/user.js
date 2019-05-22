import { call, put, select } from 'redux-saga/effects';

import {
  Creators as UserActions,
} from 'store/ducks/user';


export function* cleanUserInfo() {
  try {
    put(UserActions.cleanUserInfo());
  } catch (err) {
    yield put(UserActions.setMessage(err.response.data.message));
  }
}

export function cleanUserMessage() {
  put(UserActions.cleanUserMessage());
}
