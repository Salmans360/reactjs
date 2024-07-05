import { regexForLeadingAndTrailingSpaces } from './strings';

const validateField = (values, isCustomer) => {
  let fieldValidationErrors = {};
  const phoneValidation = (val) => {
    const error =
      val
        ?.trim()
        .split(' ')
        .join('')
        .split(')')
        .join('')
        .split('(')
        .join('')
        .split('-')
        .join('').length < 12;
    return error;
  };
  for (const key in values) {
    const value = values[key];
    switch (key) {
      // case 'firstName':
      //   fieldValidationErrors[key] =
      //     value?.length > 1
      //       ? value.match(regexForLeadingAndTrailingSpaces)
      //         ? null
      //         : 'No Leading or trailing spaces are allowed'
      //       : null;

      //   break;
      // case 'lastName':
      //   fieldValidationErrors[key] =
      //     value?.length > 1
      //       ? value.match(regexForLeadingAndTrailingSpaces)
      //         ? null
      //         : 'No Leading or trailing spaces are allowed'
      //       : 'This field is required.';

      //   break;
      // case 'businessName':
      //   fieldValidationErrors[key] =
      //     value?.length > 1
      //       ? value.match(regexForLeadingAndTrailingSpaces)
      //         ? null
      //         : 'No Leading or trailing spaces are allowed'
      //       : 'This field is required.';
      //   break;

      case 'email':
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors[key] = isCustomer
          ? value
            ? emailValid
              ? null
              : 'Email is not valid'
            : null
          : emailValid
          ? null
          : 'Email is not valid';
        break;
      case 'businessEmail':
        let businessEmaiValid = value.match(
          /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
        );
        fieldValidationErrors[key] = value
          ? businessEmaiValid
            ? null
            : 'Email is not valid'
          : null;
        break;
      case 'password':
        let passwordValid = value.length >= 8;
        fieldValidationErrors[key] = passwordValid
          ? null
          : 'Password is too short.';
        break;
      case 'phone':
        fieldValidationErrors[key] = phoneValidation(value)
          ? ' Phone number is not correct.'
          : null;
        break;
      case 'mobileNumber':
        fieldValidationErrors[key] = phoneValidation(value)
          ? ' Mobile number is not correct.'
          : null;
        break;
      case 'businessPhone':
        fieldValidationErrors[key] = phoneValidation(value)
          ? ' Business phone number is not correct.'
          : null;
        break;
      case 'ownerPhone':
        fieldValidationErrors[key] = phoneValidation(value)
          ? ' Owner phone number is not correct.'
          : null;
        break;
      case 'licensePlate':
        fieldValidationErrors[key] =
          value?.length < 1 ? 'This field is required.' : null;
        break;

      default:
        break;
    }
  }
  return fieldValidationErrors;
};
export const phoneNumberValidation = (val) => {
  const error =
    val
      ?.trim()
      .split(' ')
      .join('')
      .split(')')
      .join('')
      .split('(')
      .join('')
      .split('-')
      .join('').length < 12;
  return error ? 'Please Enter a valid Phone Number' : true;
};
export default validateField;
