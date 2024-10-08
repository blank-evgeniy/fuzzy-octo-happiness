import { Profile, ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { firstname, lastname, username, city, age, currency, country } =
    profile;

  const errors: ValidateProfileError[] = [];

  if (
    !firstname ||
    !lastname ||
    !username ||
    !city ||
    !age ||
    !currency ||
    !country
  ) {
    errors.push(ValidateProfileError.EMPTY_FIELD);
  }

  if (age && (!Number.isInteger(age) || age < 1 || age > 124)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  return errors;
};
