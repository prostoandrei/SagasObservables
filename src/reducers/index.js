import { USER_FETCH_FAILED, USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED } from '../actions';

const initialState = {
    loading: false,
    success: false,
    user: null,
    error: null,
}

export default function reducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
      case USER_FETCH_REQUESTED: {
        return {
            ...state,
            loading: true,
        }
      }
        
      case USER_FETCH_SUCCEEDED: {
        return {
            ...state,
            user: payload.user,
            error: false,
            loading: false,
        };
      }
        
      case USER_FETCH_FAILED:
        return {
            ...state,
            error: true,
            loading: false,
        };
      default:
        return state
    }
  }