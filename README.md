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
- onImageReady - callback, if passed, returns the base64 png image in the `image` parameter (optional, not converted by default)

```ts
type Props = {
  assetID: string;
  isAnimate?: boolean;
  borderColor?: string;
  onImageReady?: (image: string) => void;
};
```
  
Disk size responsive from 96px to 240px  
  
## SDK

Providing functions and constants from [SDK](https://github.com/automainint/clef#sdk):
  
Functions `play_song_by_asset_id` & `stop` partially applied.  
No first argument `Tone`.  
  
- COLORS
- fetch_song_by_asset_id
- render_sheet
- get_song_name_by_asset_id
- get_song_colors_by_asset_id
- set_volume
- play_song_by_asset_id
- stop

```js
import { get_song_colors_by_asset_id } from 'clef-ui-sdk';
```
