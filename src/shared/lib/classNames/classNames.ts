export type StyleMods = Record<string, string | boolean | undefined>;

export const classNames = (
  cls: string,
  mods: StyleMods = {},
  additional: (string | undefined)[] = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([__className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
