import { COLORS } from '../utils';

enum SongColors {
  Major = COLORS.major,
  Minor = COLORS.minor,
  Neutral = COLORS.neutral,
  Weird = COLORS.weird
}
export type SongColor = SongColors;

export function isErrorWithMessage(error: unknown): error is Error {
  return (error as Error).message !== undefined;
}
