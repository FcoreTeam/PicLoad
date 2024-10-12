import { produce } from "immer";

const BALANCE_UPDATE = "BALANCE_UPDATE";

let mainState = {
  profilePage: {
    avatar: null,
    name: "Testing Name",
    username: "@user",
    memoryLeft: 0,
    memoryAll: 1,
    balance: 0,
  },
  photoPage: {
    uploadedNature: 0,
    uploadedArchitecture: 0,
    uploadedSport: 0,
    uploadedEat: 0,
    uploadedAdventure: 0,
  }
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
