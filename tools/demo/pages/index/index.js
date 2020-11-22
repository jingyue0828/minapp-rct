import { connect } from '../../lib/minapp-rct';
import { actions } from '../../store/index';

const page = {
  state(state) {
    const { user } = state;
    return {
      userName: user.userInfo.userName,
    };
  },
  data: {
    testThis: '11',
  },
  actions(dispatch, state) {
    return {
      updateUserName(name) {
        dispatch(actions.user.setUserInfo({ userName: name }));
      },
    };
  },

  onLoad() {
    this.updateUserName('aa');
  },
};

Page(connect()(page));
