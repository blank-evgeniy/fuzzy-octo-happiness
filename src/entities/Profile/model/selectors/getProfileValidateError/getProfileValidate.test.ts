import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateError } from "./getProfileValidateError";
import { ValidateProfileError } from "../../types/profile";

describe("getProfileValidateError", () => {
  test("errors", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.EMPTY_FIELD,
          ValidateProfileError.INCORRECT_AGE,
        ],
      },
    };

    expect(getProfileValidateError(state as StateSchema)).toEqual([
      ValidateProfileError.EMPTY_FIELD,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateError(state as StateSchema)).toBe(undefined);
  });
});
