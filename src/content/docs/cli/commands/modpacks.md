---
title: Modpacks
description: 'Modpacks Page'
---

These commands create and manage modpacks. Modpacks are stored in the `modpacks` folder inside the Cauldron folder
and launched with [`start`](/cli/commands/launcher#start). Packs use the
[Cauldron Mod Manager](/modmanager/introduction#pack-format) format.

## createMPack

Create a new modpack and install its mods.

Usage:

```bash
cauldroncli createMPack [options]
```

Options:

+ `-v <version>` `--mc_version <version>`: Minecraft Version (Required)
+ `-n <name>` `--name <name>`: Modpack Name (Required)
+ `-l <loader>` `--mc_loader <loader>`: Loader (Default: `vanilla`)
+ `-x <version>` `--mc_loader_version <version>`: Loader Version
+ `--curseforge_mods <mods>`: CSV of CurseForge mod slugs
+ `--modrinth_mods <mods>`: CSV of Modrinth mod slugs
+ `-g` `--headless`: Skip interactive elements
+ `-d` `--debug`: Output extra debugging information

Example:

```bash
cauldroncli createMPack -n my-pack -v 1.21.1 -l fabric --modrinth_mods fabric-api,sodium
```

## importMPack

Import an existing CurseForge or Modrinth modpack.

Usage:

```bash
cauldroncli importMPack --premade <base64> [options]
```

Options:

+ `--premade <base64>`: The pack download, encoded as shown below (Required)
+ `-n <name>` `--name <name>`: Modpack Name
+ `-g` `--headless`: Skip interactive elements
+ `-d` `--debug`: Output extra debugging information

`--premade` is the pack's download URL and SHA1 checksum, joined with `;` and Base64 encoded.

```bash
cauldroncli importMPack -n my-pack --premade $(printf '%s' 'https://example.com/pack.zip;<sha1>' | base64)
```

The pack is downloaded, verified against the checksum, and its mods installed. In headless mode, the result contains
the name of the imported pack.

## getMPack

List the mods in a modpack.

Usage:

```bash
cauldroncli getMPack -n <name> [options]
```

Options:

+ `-n <name>` `--name <name>`: Modpack Name (Required)
+ `-g` `--headless`: Skip interactive elements
+ `-d` `--debug`: Output extra debugging information

The mod list is returned as `{ "mods": [...] }`. If the modpack doesn't exist, the command reports
`No Modpack with name: <name>`.

## modifyMPack

Add or remove mods from a modpack.

Usage:

```bash
cauldroncli modifyMPack -n <name> [options]
```

Options:

+ `-n <name>` `--name <name>`: Modpack Name (Required)
+ `--remove <mods>`: CSV of mod slugs to remove
+ `--curseforge_mods <mods>`: CSV of CurseForge mod slugs to add
+ `--modrinth_mods <mods>`: CSV of Modrinth mod slugs to add
+ `-g` `--headless`: Skip interactive elements
+ `-d` `--debug`: Output extra debugging information

Mods are removed before new mods are added.

Example:

```bash
cauldroncli modifyMPack -n my-pack --remove sodium --modrinth_mods iris
```
