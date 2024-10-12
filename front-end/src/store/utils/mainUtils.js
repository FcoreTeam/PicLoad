export const checkMemory = (memoryAll, memoryUse) => {
  if (memoryAll - memoryUse <= 0.3) {
    alert("too low");
  } else {
    alert("too high");
  }
};

export const countMemoryPercent = (memoryAll, memoryUse) => {
  let memoryLeft = memoryAll - memoryUse;
  let percent = Math.floor((memoryLeft / memoryAll) * 100);
  return percent;
};
