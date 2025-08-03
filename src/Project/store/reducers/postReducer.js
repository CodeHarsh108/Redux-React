const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_POST_REQUEST":

        case "FETCH_POST_SUCCESS":
            
        case "FETCH_POST_FAILURE":

        default:
            return state;
    }
};