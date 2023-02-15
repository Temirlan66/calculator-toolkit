export const calCulatorActionTypes = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
    DIVIDE: "DIVIDE",
    MULTIPLY: "MULTIPLY",
  };
  
  const initialState = {
    result: 0,
  };
  export const colculatorRreducer = (state = initialState, action) => {
    switch (action.type) {
      case calCulatorActionTypes.ADD:
        return {
          ...state,
          result: state.result + action.payload,
        };
  
        case calCulatorActionTypes.SUBTRACT:
          return {
            ...state,
            result: state.result - action.payload,
          };
  
  
          case calCulatorActionTypes.DIVIDE:
              return {
                ...state,
                result: state.result / action.payload,
              };
  
              case calCulatorActionTypes.MULTIPLY:
                  return {
                    ...state,
                    result: state.result * action.payload,
                  };
      default:
        return state;
    }
  };