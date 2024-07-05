export const regexForLeadingAndTrailingSpaces =
  /^[A-Za-z0-9\/]+(?: +[A-Za-z0-9\/]+)*$/;
export const regexForNumbers = /^[0-9]*$/;
export const regexForDecimalNumbers = /^\d*\.?\d*$/;
export const whiteSpaceRegex = /\s+/;

export const validationForWhiteSpacePasswords = (value) => {
  return !whiteSpaceRegex.test(value);
};
export const searchString = (string, valueTobeSearch) => {
  if (!string || !valueTobeSearch) return false;
  return string.toLowerCase().includes(valueTobeSearch);
};

export const validateStringForEmptySpaces = (string) => {
  return regexForLeadingAndTrailingSpaces.test(string);
};

export const isNumber = (string) => {
  return regexForNumbers.test(string);
};

export const isDecimalNumber = (string) => {
  return regexForDecimalNumbers.test(string);
};

export const isValidEmail = (value) => {
  return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};
