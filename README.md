# Clef UI SDK
  
ClefDisc component and function lib for song playback control  
  
```bash
npm i clef-ui-sdk
```

## ClefDisc

Minimal example:

```js
import { ClefDisc } from 'clef-ui-sdk';

const Foo = () => <ClefDisc assetID={ASSET_ID} />;
```
  
Full example:

```ts
import { ClefDisc } from 'clef-ui-sdk';

const Foo = () => {
  const handleImageReady = (image: string) => console.log(image);
  return <ClefDisc assetID={ASSET_ID} isAnimate borderColor="#ffffff" onImageReady={handleImageReady} />;
}
```
  
- assetID - asset identifier  
- isAnimate - enable rotation (optional)  
- borderColor - disc border color (optional, no border by default)  
- colors - pass array of [COLORS](https://github.com/automainint/clef#sdk) or get colors from asset if `null` or `undefined` (optional, `null` by default)  
- size - `small-responsive`: 28px - 34px, `normal-responsive`: 92px - 240px (`normal-responsive` by default)  
- onImageReady - callback, if passed, returns the base64 png image in the `image` parameter (optional, not converted by default)  

```ts
type Props = {
  assetID: string;
  isAnimate?: boolean;
  borderColor?: string;
  colors?: SongColor[] | null;
  size?: 'small-responsive' | 'normal-responsive';
  onImageReady?: (image: string) => void;
};
```
  
## SDK

Providing functions from [SDK](https://github.com/automainint/clef#sdk):
  
Function `play_song_by_asset_id` partially applied.  
No first argument `Tone`  
  
- get_song_name_by_asset_id
- set_volume
- play_song_by_asset_id
- stop

```js
import { get_song_name_by_asset_id } from 'clef-ui-sdk';
```
