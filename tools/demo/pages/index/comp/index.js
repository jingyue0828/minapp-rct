import { connectComponent } from '../../../lib/minapp-rct';
import { actions } from '../../../store/index';

const component = {
  state(state) {
    return {
      userName: state.user.userInfo.userName,
    };
  },
  data: {
    testThis: '123',
    get computedName() {
      return this.testThis + ' ' + this.userName + ' from component';
    },
  },
  actions(dispatch, state) {
    return {
      updateUserName(name) {
        dispatch(actions.user.setUserInfo({ userName: name }));
      },
    };
  },
  methods: {
    updateUserNameByComp() {
      this.updateUserName('isComponentName');
    },
  },
  lifetimes: {
    attached() {
      this.data.testThis = '321';
    },
  },
};

Component(connectComponent()(component));
