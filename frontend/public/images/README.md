# Designer Vault — Image Assets

Replace any image by dropping a new file here with the **same filename**, or edit paths in `src/config/assets.js`.

| File | Used for |
|------|----------|
| `bg-entire.svg` | Full-page site background (outlined brand pattern). Swap with `.png` if preferred — update `assets.js`. |
| `hero-watch.png` | Watch in hero + section dividers. Use a transparent PNG for best results. |

## Quick swap

```js
// frontend/src/config/assets.js
export const ASSETS = {
  bgEntire: "/images/bg-entire.svg",
  heroWatch: "/images/hero-watch.png",
  sectionWatch: "/images/section-watch.png", // optional separate file
};
```
