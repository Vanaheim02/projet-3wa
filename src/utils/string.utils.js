//si le const est de type string
//isEmpty(str [, options]) qui vient de validator
export const isString = (data) => typeof data === "string";
// si const  est bien rempli en supprimant l'espace  est de type string

export const stringIsFilled = (data) =>
  isString(data) && data.trim().length > 0;
// array est de type tableau  et data est...
export const stringsAreFilled = (data) =>
  Array.isArray(data) && data.every(stringIsFilled);
