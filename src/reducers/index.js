const LOAD_SMTH = 'LOAD_SMTH';
const LOAD_SMTH_SUCCESS = 'LOAD_SMTH_SUCCESS';
const LOAD_SMTH_ERROR = 'LOAD_SMTH_ERROR';

const initialState = {
    loading: false,
    success: false,
    data: null,
    error: null,
}

export default function reducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
      case LOAD_SMTH: {
        return {
            ...state,
            loading: true,
        }
      }
        
      case LOAD_SMTH_SUCCESS: {
        return {
            ...state,
            data: payload.data,
            loading: false,
        };
      }
        
      case LOAD_SMTH_ERROR:
        return {
            ...state,
            error: payload.error,
            loading: false,
        };
      default:
        return state
    }
  }