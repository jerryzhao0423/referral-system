/*****************************************
 *         Referral Action
 *****************************************/

//Todo: Get user's invite code
export const fetchInviteCode = () => {
    return (dispatch, getState) => {
        const fullUrl = API_ROOT +'referral/';
        return fetch(fullUrl, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            credentials: 'include',
            method: "get",
        })
            .then((res)=>res.json())
            .then((json) => {
                dispatch(_inviteCode_received(json))
            })
            .catch((errors) => {
                throw errors;
            })
    }
}

const _inviteCode_received = (inviteCode) => {
    return {
        type: INVITE_CODE_RECEIVED,
        payload: inviteCode,
    }
};
