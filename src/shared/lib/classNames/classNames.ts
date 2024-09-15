type Mode = Record<string, string | boolean>;

export const classNames = (
  cls: string,
  mods: Mode,
  additional: string[]
): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([__className, value]) => Boolean(value))
      .map(([className, __value]) => className),
  ].join(" ");
};
