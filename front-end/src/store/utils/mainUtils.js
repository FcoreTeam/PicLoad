export const checkMemory = (memoryAll, memoryUse) => {
  let popupState = true;
  if (memoryAll - memoryUse <= 0.3) {
    return popupState;
  } else {
    return !popupState; // state попапа
  }
};

export const countMemoryPercent = (memoryAll, memoryUse) => {
  let memoryLeft = memoryAll - memoryUse;
  let percent = Math.floor((memoryLeft / memoryAll) * 100);
  return percent;
};
