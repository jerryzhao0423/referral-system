import { Record } from 'immutable';
import Immutable from 'immutable';
import * as userProfileActionTypes from '../actions/userProfileActions'

const Referral = new Record({
    id: null,
    username: '',
    invite_code: '',
    invite_record: '',
    coupon_number: '',
});
const initialState = new Immutable.Record({
    referral: new Referral({})
})();
export default function profile(state=initialState, action) {
    switch (action.type) {
        case userProfileActionTypes.INVITE_CODE_RECEIVED:
            return state.set('referral', action.payload)
            break;
        default:
            return state
    }
}
