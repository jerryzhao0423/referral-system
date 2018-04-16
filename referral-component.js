import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router'
import 'referral.css'
import {profilePageTranslation} from './index'
import {generalI18nMsg} from '../../generalI18nMsg'
import {injectIntl, intlShape} from 'react-intl';



class Referral extends Component {
    // TODO: fetch invite code
    _renderInviteCode = () => {
        let {referral} = this.props;
        console.log(referral)
        return (
            <div>
                <div className="titleLabel">Your Invite Code</div>
                <div className="invite-code-container">
                    <div className="inviteCode">
                        {referral.length > 0 ? <div>{referral[0].invite_code}</div>: null}
                    </div>
                </div>
            </div>
        )
    }

    _renderCouponList = () => {
        let {referral} = this.props;
        return (
            <div>
                <div className="titleLabel">Your Coupon List</div>
                <div className="invite-code-container">
                    {referral.length>0 ?
                        <div className="inviteCode">
                            You have invited {referral[0].invite_record} friend(s)<br/>
                            You have {referral[0].coupon_number} left
                        </div>:null}
                </div>

                <div>Please use the code 'FODREF' to redeem when you check out.</div>
            </div>
        )
    }

    render() {
        return (
            <div className="rightContainer">
                {this._renderInviteCode()}
                {this._renderCouponList()}
            </div>
        )
    }
}

export default injectIntl(Referral)