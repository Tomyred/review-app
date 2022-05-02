const initState = {
    data: [],
    loading: false,
    loaded: false,
    loadingError: false,
};

export default function loadReducer(state = initState, action) {
    switch (action.type) {
        case "LOAD_ECOMMERCE_INIT":
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
            };
        case "LOAD_ECOMMERCE_SUCCEED":
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload,
            };
        case "LOAD_ECOMMERCE_FAILED":
            return {
                ...state,
                loading: false,
                loadingError: true,
            };

        case "ADD_PRODUCT":
            return {
                ...state,
                data: state.data.concat(action.payload),
            };

        default:
            return state;
    }
}
