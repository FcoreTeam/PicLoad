export const touchMoveClosePopup = (e, popupWindowRef, action) => {
  e.stopPropagation();
  const popupHeight = popupWindowRef.getBoundingClientRect().height;
  const pos = screen.height - e.touches[0].clientY;
  popupWindowRef.style.transition = "0s";
  if (pos > popupHeight) return;
  if (pos < popupHeight / 2) {
    popupWindowRef.style.top = "100vh";
    popupWindowRef.style.transition = ".3s";
    setTimeout(() => {
      action();
    }, 300);
    return;
  }
  popupWindowRef.style.top = e.touches[0].clientY + "px";
};

export const touchMoveEndClosePopup = (e, popupWindowRef) => {
  e.stopPropagation();
  const popupHeight = popupWindowRef.getBoundingClientRect().height;
  const pos = screen.height - e.changedTouches[0].clientY;
  popupWindowRef.style.transition = ".3s";
  if (pos > popupHeight / 2 && pos < popupHeight) {
    popupWindowRef.style.top = `calc(100vh - ${
      popupWindowRef.getBoundingClientRect().height
    }px - 79px)`;
    return;
  }
};
