import * as Tone from 'tone';

import {
  get_song_colors_by_asset_id as getColorsByAssetID,
  play_song_by_asset_id as playSongByAssetID,
  COLORS
} from './sdk';

const partialPlaySongByAssetID = async (asset_id: string, ready: () => Promise<void>, options?: object) =>
  playSongByAssetID(Tone, asset_id, ready, options);

export { getColorsByAssetID, partialPlaySongByAssetID, COLORS };
