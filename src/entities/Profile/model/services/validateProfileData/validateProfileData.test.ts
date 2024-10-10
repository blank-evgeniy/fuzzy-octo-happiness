import { Currency } from "entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { Country } from "entities/Country";
import { ValidateProfileError } from "../../types/profile";

describe("validate profile data", () => {
  test("success", () => {
    const profileData = {
      username: "test",
      firstname: "test",
      lastname: "test",
      age: 20,
      city: "test",
      currency: Currency.EUR,
      country: Country.Armenia,
    };

    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test("without username", () => {
    const profileData = {
      firstname: "test",
      lastname: "test",
      age: 20,
      city: "test",
      currency: Currency.EUR,
      country: Country.Armenia,
    };

    const result = validateProfileData(profileData);

    expect(result).toEqual([ValidateProfileError.EMPTY_FIELD]);
  });

  test("with empty data", () => {
    const result = validateProfileData();

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test("with incorrect age", () => {
    const profileData = {
      username: "test",
      firstname: "test",
      lastname: "test",
      age: -10,
      city: "test",
      currency: Currency.EUR,
      country: Country.Armenia,
    };

    const result = validateProfileData(profileData);

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
});
