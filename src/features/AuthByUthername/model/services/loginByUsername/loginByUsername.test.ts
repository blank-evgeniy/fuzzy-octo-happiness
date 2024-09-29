import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunc } from "shared/lib/tests/TestAsyncThunk/TestAsyncThynk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("login by username", () => {
  //   let dispatch: Dispatch;
  //   let getState: () => StateSchema;

  //   beforeEach(() => {
  //     dispatch = jest.fn();
  //     getState = jest.fn();
  //   });

  //   test("fulfilled", async () => {
  //     const userValue = { username: "123", id: "1" };
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //     const action = loginByUsername({ username: "123", password: "123" });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //     expect(dispatch).toHaveBeenCalledTimes(3);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe("fulfilled");
  //     expect(result.payload).toEqual(userValue);
  //   });

  //   test("rejected", async () => {
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //     const action = loginByUsername({ username: "123", password: "123" });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(dispatch).toHaveBeenCalledTimes(2);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe("rejected");
  //     expect(result.payload).toBe(
  //       "You entered an incorrect username or password"
  //     );
  //   });

  test("fulfilled", async () => {
    const userValue = { username: "123", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunc = new TestAsyncThunc(loginByUsername);
    const result = await thunc.callThunc({ username: "123", password: "123" });

    expect(thunc.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunc.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("rejected", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunc = new TestAsyncThunc(loginByUsername);
    const result = await thunc.callThunc({ username: "123", password: "123" });

    expect(thunc.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe(
      "You entered an incorrect username or password"
    );
  });
});
