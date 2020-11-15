/**
 * 创建模块 模块对象必须为一个标准对象
 * {
    name: 'xxx',
    initialState: {
    },
    actions: {
    },
    asyncActions: actions => ({
    }),
    reducers: {
    }
  }
 * 返回一个redux模块
 * @param {Object} mudule
 * @returns {Object}
 */
export const createModule = (module) => {
  const { initialState, reducers, name, actions, asyncActions } = module;
  const _reducer = {};
  for (const key in reducers) {
    _reducer[`${name}_${key}`] = reducers[key];
  }
  const _actions = {};
  for (const key in actions) {
    _actions[key] = function (v) {
      return {
        type: `${name}_${key}`,
        payload: actions[key](v),
      };
    };
  }
  const _asyncActions = asyncActions(_actions);
  for (const key in _asyncActions) {
    _actions[key] = _asyncActions[key];
  }
  return {
    reducer(state = initialState, action) {
      const _state = _reducer[action.type] ? _reducer[action.type](state, action) : state;
      return _state;
    },
    actions: _actions,
    name,
  };
};

/**
 * 合并 modules
 * @param {Object} modules
 * @returns {Object}
 */
export const combineModules = (modules) => {
  const _actions = {};
  const _reducers = {};
  for (const key in modules) {
    const { name, actions, reducer } = modules[key];
    (_actions[name] = actions), (_reducers[name] = reducer);
  }
  return {
    actions: _actions,
    reducers: _reducers,
  };
};
