const passwordValidation = (value) => {
  let errors = {};
  if (value.length) {
    // -|?&
    const digitRgx = new RegExp('(?=.*?[0-9])');
    const capsRgx = new RegExp('(?=.*?[A-Z])');
    const symbolRgx = new RegExp('(?=.*?[~`/<,>&:{?&.}[|;"=+(_)!@#$%^*_])');

    if (value.length > 8) {
      errors.passMin = true;
    } else {
      errors.passMin = false;
    }
    if (digitRgx.test(value)) {
      errors.passDigit = true;
    } else {
      errors.passDigit = false;
    }
    if (capsRgx.test(value)) {
      errors.passCaps = true;
    } else {
      errors.passCaps = false;
    }

    if (symbolRgx.test(value)) {
      errors.passSymbol = true;
    } else {
      errors.passSymbol = false;
    }
  } else {
    errors.passSymbol = false;
    errors.passCaps = false;
    errors.passDigit = false;
    errors.passMin = false;
    errors.length = 'too Short';
  }
  return errors;
};
export default passwordValidation;
