import {
  REQUEST_IN_PROGRESS,
  REQUEST_FINISHED,
} from '../../constants/actionTypes';
import { PRODUCTS_FETCHING_REQUEST } from '../../constants/requestsNames';

interface Action {
  type: string;
  requestName: string;
}

export const requestsManagerInitialState = {
  requestsManager: {
    [PRODUCTS_FETCHING_REQUEST]: false,
  },
};

const requestManagerReducer: any = (
  state = requestsManagerInitialState,
  action: Action
) => {
  const { type, requestName } = action;

  switch (type) {
    case REQUEST_IN_PROGRESS:
      return {
        ...state,
        [requestName]: true,
      };
    case REQUEST_FINISHED:
      return {
        ...state,
        [requestName]: false,
      };
    default:
      return state;
  }
};

export default requestManagerReducer;
