import { AuthMe } from './AuthReducer';

const INITIALISED_SUCSESS = 'app/INITIALISED_SUCSESS';

let initialState = {
  initialised: false,
};

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALISED_SUCSESS:
      return {
        ...state,
        initialised: true,
      };
      break;

    default:
      return state;
  }
}

export const InitialisedSucsess = () => ({ type: INITIALISED_SUCSESS });

export const initialiseApp = () => (dispatch) => {
  let promise = dispatch(AuthMe());

  Promise.all([promise]).then(() => {
    dispatch(InitialisedSucsess());
  });
};

export default AppReducer;
