import { TestAsyncThunc } from "shared/lib/tests/TestAsyncThunk/TestAsyncThynk";
import { fetchProfileData } from "./fetchProfileData";

const profileData = {
  username: "test",
  firstname: "test",
  lastname: "test",
  age: 20,
  city: "test",
};

describe("fetch profile data", () => {
  test("fulfilled", async () => {
    const thunk = new TestAsyncThunc(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));

    const result = await thunk.callThunc();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(profileData);
  });

  test("rejected", async () => {
    const thunk = new TestAsyncThunc(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunc();

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
