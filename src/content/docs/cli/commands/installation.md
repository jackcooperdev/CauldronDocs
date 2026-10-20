---
title: Installation Management
description: 'Installation Page'
---

These commands manage the Cauldron folder used by CauldronCLI.

> The location of the Cauldron folder is set by `CAULDRON_PATH` in
> [cauldroncli_admin.json](/cli/introduction#cauldroncli_adminjson).

## reset

Usage:

```bash
cauldroncli reset
```

Deletes the Cauldron folder and recreates an empty one. This removes all installed versions, modpacks and sessions.

## uninstall

Usage:

```bash
cauldroncli uninstall
```

Deletes the Cauldron folder.

> `cauldroncli_admin.json` in your home folder is not removed.
