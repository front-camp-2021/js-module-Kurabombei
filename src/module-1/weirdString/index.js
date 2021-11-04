export const weirdString = (str = "") => {
  return str.split(' ').map((el) => el.substring(0, el.length-1).toUpperCase() + el.charAt(el.length-1).toLowerCase()).join(' ');
};
