import * as Tone from 'tone';

import { ParametersWithoutFirst } from '../types';
import {
  get_song_colors_by_asset_id as getColorsByAssetID,
  play_song_by_asset_id as playSongByAssetID,
  stop,
  COLORS
} from './sdk';

const partialPlaySongByAssetID = async (...params: Required<ParametersWithoutFirst<typeof playSongByAssetID>>) =>
  playSongByAssetID(Tone, ...params);

const partialStop = async (...params: Required<ParametersWithoutFirst<typeof stop>>) =>
  stop(Tone, ...params);

export { getColorsByAssetID, partialPlaySongByAssetID, partialStop, COLORS };
