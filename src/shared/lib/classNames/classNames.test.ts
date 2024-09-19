import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only cls arg", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with mods argument", () => {
    expect(classNames("cls", { one: true, two: false, three: true })).toBe(
      "cls one three"
    );
  });

  test("with additional argument", () => {
    expect(classNames("cls", undefined, ["one", "two", undefined])).toBe(
      "cls one two"
    );
  });

  test("with all args", () => {
    expect(
      classNames("cls", { one: true, two: false, three: true }, [
        "one",
        "two",
        undefined,
      ])
    ).toBe("cls one two one three");
  });
});
