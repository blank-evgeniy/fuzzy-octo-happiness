import { Country } from "entities/Country/model/types/country";
import { Currency } from "entities/Currency/model/types/currency";

export enum ValidateProfileError {
  EMPTY_FIELD = "empty field",
  INCORRECT_AGE = "incorrect age",
  NO_DATA = "no data",
  SERVER_ERROR = "server error",
}

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  validateError?: ValidateProfileError[];
  readonly: boolean;
}
