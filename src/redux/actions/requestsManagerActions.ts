export const setRequestState =
  (type: string, requestName: string) => (dispatch: Function) => {
    dispatch({ type, requestName });
  };
