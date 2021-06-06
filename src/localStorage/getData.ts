export const getData = (key: string) => {
  if (key === "cart") {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } else {
    return JSON.parse(localStorage.getItem(key) || "{}");
  }
};
