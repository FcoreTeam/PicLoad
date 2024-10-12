import { profileState } from "../slices/userSlice";

export const checkMemory = () => {
  let memoryLeft = profileState.memoryAll - profileState.memoryUse;
  if (memoryLeft <= 0.3) {
    alert("too low");
  }
};

export const countMemoryPercent = () => {
  let memoryLeft = profileState.memoryAll - profileState.memoryUse;
  let percent = Math.floor((memoryLeft / profileState.memoryAll) * 100);
  return percent;
};
