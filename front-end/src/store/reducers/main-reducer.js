import { produce } from "immer";

const BALANCE_UPDATE = "BALANCE_UPDATE";

let mainState = {
  profilePage: {
    avatar: null,
    name: "Testing Name",
    username: "@user",
    memoryLeft: 0.45,
    memoryAll: 1.5,
    balance: 547.96,
  },
};

const mainReducer = (state, action) => {
  mainState = produce(mainState, (draft) => {
    switch (action.type) {
      case BALANCE_UPDATE:
        draft.balance = action.balance;
        break;
      default:
    }
  });
  return mainState;
};

export const balanceUpdateCreator = (balance) => {
  return { type: BALANCE_UPDATE, balance: balance };
};
export default mainReducer;
