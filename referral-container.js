import { connect } from 'react-redux'
import Referral from '../../components/userProfile/referral'
import * as userProfileActions from '../../actions/userProfileActions'

const mapStateToProps = (state, ownProps) => {
    return {
        referral: state.profile.referral
    }
};

export default connect(mapStateToProps)(Referral);