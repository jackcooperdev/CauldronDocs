---
title: Installation Management
description: 'Installation Page'
---

These commands manage the Cauldron folder used by CauldronCLI.

> The location of the Cauldron folder is set by `CAULDRON_PATH` in
> [cauldroncli_admin.json](/cli/introduction#cauldroncli_adminjson).

## list

Usage:

```bash
cauldroncli list --headless
```

Options:

+ `-n` `--headless`: Output the list as JSON

Lists the versions installed in the Cauldron folder. These can be launched
[offline](/cli/introduction#offline-use).

```json
{
  "type": "complete",
  "success": true,
  "payload": {
    "message": "OK",
    "versions": [
      { "loader": "vanilla", "version": "1.21.1", "loaderVersion": "" },
      { "loader": "forge", "version": "1.20.1", "loaderVersion": "47.4.0" }
    ]
  }
}
```

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
