import { COLORS } from '../utils';

enum SongColors {
  Major = COLORS.major,
  Minor = COLORS.minor,
  Neutral = COLORS.neutral,
  Weird = COLORS.weird
}
export type SongColor = SongColors;

export function isSongColors(colors: unknown): colors is SongColor[] {
  const _colors = colors as SongColor[];
  return (
    Array.isArray(_colors) &&
    _colors.every(
      (color) => color === COLORS.major || color === COLORS.minor || color === COLORS.neutral || color === COLORS.weird
    )
  );
}

export function isErrorWithMessage(error: unknown): error is Error {
  return (error as Error).message !== undefined;
}

export type ParametersWithoutFirst<T extends (first: any, ...args: any) => any> = T extends (
  first: any,
  ...args: infer P
) => any
  ? P
  : never;
