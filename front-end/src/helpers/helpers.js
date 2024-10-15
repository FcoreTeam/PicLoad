export const touchMoveClosePopup = (e, popupWindowRef, action) => {
  const fingerPos =
    screen.height - e.touches[0].clientY - e.target.offsetHeight;
  console.log(fingerPos > -70 && fingerPos < 80)
  if (fingerPos > 80) return;
  if (fingerPos < -70) {
    popupWindowRef.current.style.bottom = "-50%";
    setTimeout(() => {
      action()
    }, 300);
    return;
  }
  popupWindowRef.current.style.bottom = fingerPos + "px";
};

export const touchMoveEndClosePopup = (e, popupWindowRef) => {
  const fingerPos =
    screen.height - e.changedTouches[0].clientY - e.target.offsetHeight;
  if (fingerPos > -70 && fingerPos < 80) {
    popupWindowRef.current.style.bottom = "80px";
    return;
  }
}