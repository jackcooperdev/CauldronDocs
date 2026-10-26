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

+ `-g` `--headless`: Output the list as JSON

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

## update

Usage:

```bash
cauldroncli update [options]
```

Options:

+ `-c` `--check`: Only check for an update
+ `-g` `--headless`: Output JSON

Downloads the latest release from the [releases page](https://github.com/jackcooperdev/CauldronCLI/releases) and
replaces the current binary. The new binary is checked before it is used, so a failed update leaves the current
version in place.

New versions are also installed automatically. See [Updating](/cli/introduction#updating).

> Updates are only available for release binaries. Copies run from source or npm are updated with git / npm.

In headless mode, `message` is `up_to_date`, `update_available` (with `--check`) or `updated`.

```json
{
  "type": "complete",
  "success": true,
  "payload": { "message": "updated", "current": "0.7.1", "latest": "0.8.0", "updated": true }
}
```

If the update fails, an `error` is returned and the command exits with code `1`.

> On Linux and macOS, updating needs write access to the folder `cauldroncli` is installed in. Binaries installed with
> the [installer](/cli/introduction#installer-recommended) can always be updated.
