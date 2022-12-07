import * as Tone from 'tone';

import { ParametersWithoutFirst } from '../types';
import {
  get_song_colors_by_asset_id as getColorsByAssetID,
  play_song_by_asset_id as playSongByAssetID,
  COLORS
} from './sdk';

const partialPlaySongByAssetID = async (...params: Required<ParametersWithoutFirst<typeof playSongByAssetID>>) =>
  playSongByAssetID(Tone, ...params);

export { getColorsByAssetID, partialPlaySongByAssetID, COLORS };
