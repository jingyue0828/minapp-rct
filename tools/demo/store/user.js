import { createModule } from '../lib/reduxUtils';

export default createModule({
  name: 'user',
  initialState: {
    userInfo: { userName: 'hh' },
  },
  actions: {
    setUserInfo: (v) => v,
  },
  asyncActions: (actions) => ({
    getUserInfo(userName) {
      return function (dispatch, getState) {
        return Promise.resolve({ userName, id: 1 }).then(
          (res) => {
            dispatch(actions.setUserInfo(res));
            return res;
          },
          (err) => Promise.reject(err),
        );
      };
    },
  }),
  reducers: {
    setUserInfo(state, action) {
      return { ...state, userInfo: action.payload };
    },
  },
});
