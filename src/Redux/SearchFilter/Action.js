import * as TYPE from "./Types";

export const resetSearchAction = () => async (dispatch) => {
  await dispatch({ type: TYPE.SET_RESET_SEARCH });
  await dispatch({ type: TYPE.RESET_CURRENT_CONTENTS });
  return dispatch({ type: TYPE.SET_PRODUCTS });
};

export const setCurrentSearchAction = (data) => async (dispatch) => {
  await dispatch({ type: TYPE.SET_CURRENT_SEARCH, payload: data });
  await dispatch({ type: TYPE.RESET_CURRENT_CONTENTS });
  return dispatch({ type: TYPE.SET_PRODUCTS });
};

export const setFetchedDataAction = () => async (dispatch) => {
  dispatch({ type: TYPE.SET_FETCHED_DATA });
  return fetch("https://panjs.com/ywc18.json")
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: TYPE.SET_FETCHED_DATA_SUCCESS, payload: data })
    )
    .then(() => dispatch({ type: TYPE.SET_SUBCATEGORIES }))
    .then(() => dispatch({ type: TYPE.SET_PRODUCTS }))
    .catch((error) =>
      dispatch({ type: TYPE.SET_FETCHED_DATA_FAILED, error: error })
    );
};

export const setCategoryAction = (data) => async (dispatch) => {
  await dispatch({ type: TYPE.SET_CATEGORY, payload: data });
  await dispatch({ type: TYPE.SET_SUBCATEGORIES });
  await dispatch({ type: TYPE.SET_SUBCATEGORY, payload: "" });
  await dispatch({ type: TYPE.RESET_CURRENT_CONTENTS });
  return dispatch({ type: TYPE.SET_PRODUCTS });
};

export const setProvinceAction = (data) => async (dispatch) => {
  await dispatch({ type: TYPE.SET_PROVINCE, payload: data });
  await dispatch({ type: TYPE.RESET_CURRENT_CONTENTS });
  return dispatch({ type: TYPE.SET_PRODUCTS });
};

export const setPriceAction = (data) => async (dispatch) => {
  await dispatch({ type: TYPE.SET_PRICE, payload: data });
  await dispatch({ type: TYPE.RESET_CURRENT_CONTENTS });
  return dispatch({ type: TYPE.SET_PRODUCTS });
};

export const setSubCategoryAction = (data) => async (dispatch) => {
  await dispatch({ type: TYPE.SET_SUBCATEGORY, payload: data });
  await dispatch({ type: TYPE.RESET_CURRENT_CONTENTS });
  return dispatch({ type: TYPE.SET_PRODUCTS });
};

export const setToggleSearchAction = () => {
  return { type: TYPE.SET_TOGGLE_SEARCH };
};

export const setGetMoreContentsAction = () => {
  return { type: TYPE.GET_MORE_CURRENT_CONTENTS };
};
