---
title: Pack Controller
description: 'Pack Controller Page'
sidebar:
    label: Pack
---

This controller creates, imports and edits packs.

```js
const { createPack, importFromFolder, addMods, removeMods, getPackInfo, getPackIndex } = require('@jackcooperdev/cmm/pack');
```

## Functions

### createPack (fileData, dir)

Parameters:

+ `fileData`: An object describing the pack. See below.
+ `dir`: Folder to create the pack in. The pack is created at `<dir>/<name>`.

| Field              | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `name`             | Pack name, also used as the folder name                                     |
| `author`           | Pack author                                                                 |
| `minecraftVersion` | Minecraft version, e.g. `1.20.1`. Use `release` or `snapshot` for the latest |
| `loader`           | `forge`, `fabric` or `neoforge`                                             |
| `loaderVersion`    | (Optional) Loader version. Leave out, or use `latest`, `release` or `default`, for the recommended version |
| `mods`             | Array of [mod entries](#mod-entry)                                          |

> **Warning:** If `<dir>/<name>` already exists it is **deleted** and recreated.

The function creates the pack and then adds the mods using [addMods](#addmods-packpath-mods).

It resolves with the contents of `pack.json`.

It rejects with:

+ `invalid_loader` if `loader` is `vanilla`. Vanilla packs are not supported
+ `version not valid` if the Minecraft version is not supported by the loader
+ any error from [addMods](#addmods-packpath-mods)

### importFromFolder (zipPath, outPath, nameOverride)

Parameters:

+ `zipPath`: Path to a CurseForge `.zip` or Modrinth `.mrpack` file
+ `outPath`: Folder to import the pack into. The pack is created at `<outPath>/<name>`.
+ `nameOverride`: (Optional) Pack name. Defaults to five random words, e.g. `we-ship-fifteen-fat-there`

The function reads the pack's manifest (`manifest.json` or `modrinth.index.json`) and looks up each mod on CurseForge
or Modrinth. The Minecraft version and loader are taken from the manifest.

Files in the archive's `overrides/` folder (configs etc.) are copied into the pack, except logs, crash reports,
`.hprof` files and files over 100MB.

Mods that cannot be found are logged to the console and left out of the pack.

If a pack with the same name already exists:

+ If it was imported from the same file, it is returned unchanged
+ Otherwise, it is replaced

It resolves with the contents of `pack.json`.

It rejects with `FILE_NOT_EXIST` if the file does not exist, or `NOT_VALID_FILE` if it is not a `.zip` / `.mrpack`
modpack.

### addMods (packPath, mods)

Parameters:

+ `packPath`: Path to the pack
+ `mods`: Array of [mod entries](#mod-entry)

For each mod, the latest file that matches the pack's Minecraft version and loader is added. Required dependencies
are added automatically. Mods that are already in the pack are skipped.

Invalid slugs are logged to the console and skipped.

It resolves `true`.

It rejects with one of the following if a matching file cannot be found:

+ `mod not found <slug>` (CurseForge)
+ `mod file not found` (CurseForge)
+ `mod has no valid version for this mc version / loader` (Modrinth)

```js
await addMods('./packs/my-pack', [{ source: 'mr', slug: 'lithium' }]);
```

### removeMods (packPath, mods)

Parameters:

+ `packPath`: Path to the pack
+ `mods`: Array of mod slugs

Removes mods from the pack. Dependencies are **not** removed. Slugs that are not in the pack are ignored.

It resolves `true`.

```js
await removeMods('./packs/my-pack', ['lithium']);
```

### getPackInfo (packPath)

Returns the contents of the pack's [`pack.json`](/modmanager/introduction#packjson), or `false` if it cannot be read.

### getPackIndex (packPath)

Returns the contents of the pack's [`index.json`](/modmanager/introduction#indexjson), or `false` if it cannot be read.

## Appendix

### Mod Entry

```json
{ "source": "mr", "slug": "sodium" }
```

+ `source`: `cf` (CurseForge) or `mr` (Modrinth)
+ `slug`: The project slug from the mod's page URL, e.g. `sodium` from `modrinth.com/mod/sodium`

> CurseForge lookups only search mods. Resource packs and shaders can be added from Modrinth.
