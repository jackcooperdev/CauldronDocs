---
title: Bootstrap Controller
description: 'Bootstrap Controller Page'
sidebar:
    label: Bootstrap
---

This controller installs a pack into a game folder.

```js
const { installMods } = require('@jackcooperdev/cmm/bootstrap');
```

## Functions

### installMods (packPath, destPath)

Parameters:

+ `packPath`: Path to the pack
+ `destPath`: Game folder to install into. It is created if it does not exist.

The function:

1. Copies the pack's override files (configs etc.) into `destPath`
2. Downloads every mod, resource pack and shader from CurseForge or Modrinth, verifying each file's SHA1 checksum.
   Files that already exist and match are not downloaded again
3. Removes files from `mods/` that are not part of the pack
4. Writes `modpack.cmm` and `plain.json` into `destPath`

It resolves `true`.

It rejects with `pack not found` if `packPath` does not exist.

> **Warning:** Any file in `destPath/mods` that is not part of the pack is **deleted**, including mods added by
> hand. Files inside `mods/<minecraft version>/` are left alone.

> Override files that already exist in `destPath` but have been changed are **not** replaced, so player changes to
> configs are kept.

```js
await installMods('./packs/my-pack', './instances/my-pack');
```

## Appendix

### modpack.cmm

Records which version of the pack is installed. `plain.json` contains the same data as readable JSON, and
`modpack.cmm` is the same data Base64 encoded.

```json
{
  "relatesTo": "<index hash from pack.json>",
  "index": []
}
```

+ `relatesTo`: The `index.hash` from the pack's `pack.json` at install time
+ `index`: The pack's `index.json` at install time
