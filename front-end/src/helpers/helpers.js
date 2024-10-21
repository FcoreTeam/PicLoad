export const touchMoveClosePopup = (e, popupWindowRef, action) => {
  e.stopPropagation();
  const popupHeight = popupWindowRef.getBoundingClientRect().height
  const pos = screen.height - e.touches[0].clientY
  popupWindowRef.style.transition = "0s";
  if (pos > popupHeight + 79) return;
  if (pos < popupHeight / 2 - 79) {
    popupWindowRef.style.top = "100vh";
    popupWindowRef.style.transition = ".3s";
    setTimeout(() => {
      action()
    }, 300);
    return;
  }
  popupWindowRef.style.top = e.touches[0].clientY + "px";
};

export const touchMoveEndClosePopup = (e, popupWindowRef) => {
  e.stopPropagation();
  const popupHeight = popupWindowRef.getBoundingClientRect().height
  const pos = screen.height - e.changedTouches[0].clientY
  popupWindowRef.style.transition = ".3s";
  if (pos > popupHeight / 2 - 79 && pos < popupHeight + 79) {
    popupWindowRef.style.top = `calc(100vh - ${popupWindowRef.getBoundingClientRect().height}px - 79px)`;
    return;
  }
}

export const getIdFromAddress = () => new URLSearchParams(window.location.search).get("tg_id")

import natureImg from "../img/icons/nature.svg";
import architectImg from "../img/icons/architect.svg";
import sportImg from "../img/icons/sport.svg";
import eatImg from "../img/icons/food.svg";
import adventureImg from "../img/icons/adventure.svg";

export const sortCategoriesData = (categories) => {
  return categories.map((el) => {
    switch (el.title) {
      case "Природа":
        return {
          image: natureImg,
          name: el.title,
          type: "nature",
          typeBackground: "nature__bg",
          loaded: el.quantity,
        };
      case "Еда":
        return {
          image: eatImg,
          name: el.title,
          type: "eat",
          typeBackground: "eat__bg",
          loaded: el.quantity,
        };
      case "Спорт":
        return {
          image: sportImg,
          name: el.title,
          type: "sport",
          typeBackground: "sport__bg",
          loaded: el.quantity,
        };
      case "Путешествия":
        return {
          image: adventureImg,
          name: el.title,
          type: "adventure",
          typeBackground: "adventure__bg",
          loaded: el.quantity,
        };
      case "Архитектура":
        return {
          image: architectImg,
          name: el.title,
          type: "architect",
          typeBackground: "architect__bg",
          loaded: el.quantity,
        };
    }
  });
}