export const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";
export const USER_FETCH_FAILED = "USER_FETCH_FAILED";

export const userFetchRequested = (data) => {
    console.log(data);
    
    return {
        type: USER_FETCH_REQUESTED,
        payload: {
            userId: 1234,
        }
    };
}
export const userFetchSucceeded = (user) => ({ type: USER_FETCH_SUCCEEDED, payload: { user } })
export const userFetchFailed = () => ({ type: USER_FETCH_FAILED })