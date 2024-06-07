import createAction from '../utils/createAction';

export const UI_TOGGLE_PARAM = 'UI_TOGGLE_PARAM';
export const UI_SET_PARAM = 'UI_SET_PARAM';

const toggleParam = param => createAction(UI_TOGGLE_PARAM, { param });

const setParam = (param, value) => {
  const payload = {
    param,
    value,
  };
  return createAction(UI_SET_PARAM, payload);
};

export { toggleParam, setParam };
