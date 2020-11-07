import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { 
    map,
    switchMap,
    catchError,
    withLatestFrom,
 } from 'rxjs/operators';

import {
    USER_FETCH_REQUESTED,
    userFetchFailed,
    userFetchSucceeded,
 } from '../../actions'
 import { Api } from '../../api';

export const fetchUserEpic = (action$, state$) => action$.pipe(
    ofType(USER_FETCH_REQUESTED),
    withLatestFrom(state$),
    switchMap(() => {
        return from(Api.fetchUser(action$)).pipe(
            map(userFetchSucceeded),
            catchError(() => of(userFetchFailed()))
        )
    })
);
