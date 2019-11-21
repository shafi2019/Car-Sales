export const ADD_FEATURE = "ADD_FEATURE";
export const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const REMOVE_FEATURE_PRICE = "REMOVE_FEATURE_PRICE";

export const addFeature = feature => {
  return{
    type: ADD_FEATURE,
    payload: feature
  }
}

export const addFeaturePrice = feature => {
  return{
    type: ADD_FEATURE_PRICE,
    payload: feature
  }
}

export const removeFeature = featurePrice => {
  return{
    type: REMOVE_FEATURE,
    payload: featurePrice
  }
}

export const removeFeaturePrice = featurePrice => {
  return {
    type: REMOVE_FEATURE_PRICE,
    payload: featurePrice
  };
};