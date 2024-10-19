export const touchMoveClosePopup = (e, popupWindowRef, action) => {
  const pos = screen.height - e.touches[0].clientY
  popupWindowRef.current.style.transition = "0s";
  if (pos > 280) return;
  if (pos < 140) {
    popupWindowRef.current.style.top = "100vh";
    popupWindowRef.current.style.transition = ".3s";
    setTimeout(() => {
      action()
    }, 300);
    return;
  }
  popupWindowRef.current.style.top = e.touches[0].clientY + "px";
};

export const touchMoveEndClosePopup = (e, popupWindowRef) => {
  const pos = screen.height - e.changedTouches[0].clientY
  popupWindowRef.current.style.transition = ".3s";
  if (pos > 140 && pos < 280) {
    popupWindowRef.current.style.top = "calc(100vh - 280px)";
    return;
  }
}