import { TestAsyncThunc } from "shared/lib/tests/TestAsyncThunk/TestAsyncThynk";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../types/profile";
import { Currency } from "entities/Currency";
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

describe("fetch profile data", () => {
  test("fulfilled", async () => {
    const thunk = new TestAsyncThunc(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunc();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server error", async () => {
    const thunk = new TestAsyncThunc(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunc();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunc(updateProfileData, {
      profile: {
        form: { ...data, lastname: "" },
      },
    });

    const result = await thunk.callThunc();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.EMPTY_FIELD]);
  });
});
