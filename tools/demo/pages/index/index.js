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
    get computedName() {
      return this.testThis + ' ' + this.userName + ' from Page';
    },
  },
  actions(dispatch, state) {
    return {
      updateUserName(name) {
        dispatch(actions.user.setUserInfo({ userName: name }));
      },
    };
  },

  onLoad() {
    this.setData({ testThis: '33' }, () => {
      console.log(this.testThis, 'this--test');
    });
    this.updateUserName('aa');
  },
};

Page(connect()(page));
