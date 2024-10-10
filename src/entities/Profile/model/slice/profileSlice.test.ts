import { Currency } from "entities/Currency";
import { ProfileSchema } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { Country } from "entities/Country";

const data = {
  username: "test",
  firstname: "test",
  lastname: "test",
  age: 20,
  city: "test",
  currency: Currency.EUR,
  country: Country.Armenia,
};

describe("profileSlice", () => {
  test("set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({
      readonly: true,
    });
  });

  test("cansel edit", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false, data };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      validateError: undefined,
      data,
      form: data,
    });
  });

  test("update profile", () => {
    const state: DeepPartial<ProfileSchema> = {};

    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfile(data))
    ).toEqual({
      form: data,
    });
  });
});
