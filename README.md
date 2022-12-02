# Clef UI SDK

```bash
npm i clef-ui-sdk
```

## Диск

Минимальный пример:

```js
import { ClefDisc } from 'clef-ui-sdk';

const Foo = () => <ClefDisc assetID={ASSET_ID} />;
```
  
Полный функционал:

```ts
import { ClefDisc } from 'clef-ui-sdk';

const Foo = () => {
  const handleImageReady = (image: string) => console.log(image);
  return <ClefDisc assetID={ASSET_ID} isAnimate borderColor="#ffffff" onImageReady={handleImageReady} />;
}
```
  
- assetID - id ассета  
- isAnimate - включить анимацию вращения (опционально)  
- borderColor - цвет границы вокруг диска (опционально, по-умолчанию границы нет)  
- onImageReady - обратный вызов, если передан, то возвращает base64 png изображение в параметре image (опционально, по-умолчанию ничего не конвертирует)

```ts
type Props = {
  assetID: string;
  isAnimate?: boolean;
  borderColor?: string;
  onImageReady?: (image: string) => void;
};
```
  
## SDK

Пробрасываются функции и константы из sdk:

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
