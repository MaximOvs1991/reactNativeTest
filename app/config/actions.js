export const SET_USER_CREDS = 'SET_USER_CREDS';

export function setUserCreds(data) {
    return {
        type: SET_USER_CREDS,
        ...data
    }
}