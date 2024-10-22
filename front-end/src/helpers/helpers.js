export const touchMoveClosePopup = (e, popupWindowRef) => {
  const popupHeight = popupWindowRef.getBoundingClientRect().height;
  const pos = e.touches[0].clientY;
  popupWindowRef.style.transition = "0s";
  if (pos < (screen.height - popupHeight - (popupHeight / 2))) return;
  popupWindowRef.style.top = `${pos}px`;
};

export const touchMoveEndClosePopup = (e, popupWindowRef, action) => {
  const popupHeight = popupWindowRef.getBoundingClientRect().height;
  const pos = e.changedTouches[0].clientY;
  popupWindowRef.style.transition = ".3s";
  if (pos < (screen.height - popupHeight / 2 - 79) && pos >= popupHeight + 50) {
    popupWindowRef.style.top = `calc(100vh - ${popupHeight}px - 79px)`;
  } else if (pos > (screen.height - popupHeight / 2 - 79)) {
    popupWindowRef.style.top = "100vh";
    setTimeout(() => {
      action();
    }, 300);
  }
};


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