---
title: Launcher
description: 'Launcher Page'
---

These commands launch instances of Minecraft.

## start

Install and launch an instance of Minecraft.

Usage:

```bash
cauldroncli start [options]
```

Options:

+ `-v <version>` `--mc_version <version>`: Minecraft Version, or `release` / `snapshot` for the latest (Required
  unless launching a saved modpack)
+ `-l <loader>` `--mc_loader <loader>`: Loader: `vanilla`, `forge`, `fabric` or `neoforge` (Default: `vanilla`)
+ `-x <version>` `--mc_loader_version <version>`: Loader Version (Default: recommended version)
+ `-n <name>` `--name <name>`: Instance Name. Also used as the modpack name
+ `-m <token>` `--account <token>`: Minecraft Access Token. See [Accounts](#accounts)
+ `-o <overrides>` `--overrides <overrides>`: Launch overrides as CSV. See [Overrides](#overrides)
+ `--curseforge_mods <mods>`: CSV of CurseForge mod slugs to install
+ `--modrinth_mods <mods>`: CSV of Modrinth mod slugs to install
+ `-c` `--cache`: Use the existing modpack called `<name>` instead of rebuilding it from the mod flags
+ `-i` `--dry`: Install the game without launching it (Default: false)
+ `-g` `--headless`: Skip interactive elements
+ `-d` `--debug`: Output extra debugging information

The game is installed (if needed) and launched. Once the game starts, its log is shown in the terminal until the game
closes (unless `--dry` or `--headless` is used). This includes versions without a log4j config (1.5.2 and older),
which use the engine's [legacy logging](/engine/controllers/client#legacy-logging).

While the game is installed, [progress bars](/engine/controllers/queue#progress-bars) show how many files have been
checked and downloaded. They are not shown with `--headless`.

Versions that have been installed before can be launched [offline](/cli/introduction#offline-use).

Each instance runs in its own folder at `sessions/<name>` in the Cauldron folder. If `--name` is not given, the name
`quick-<loader>-<version>` is used.

If `--name` matches an existing [modpack](/cli/commands/modpacks), its mods are installed and its Minecraft version
and loader are used.

### Examples

> Launch 1.21.1 vanilla in demo mode

```bash
cauldroncli start -v 1.21.1
```

> Launch 1.20.1 Forge with an account and 6GB of RAM

```bash
cauldroncli start -v 1.20.1 -l forge -m <minecraft_access_token> -o ram=6,ram_low=2
```

> Create a Fabric modpack from Modrinth and launch it

```bash
cauldroncli start -v 1.21.1 -l fabric -n my-pack --modrinth_mods fabric-api,sodium
```

> Launch the same modpack again

```bash
cauldroncli start -n my-pack
```

### Accounts

`--account` takes a Minecraft access token. This is the `access_token` returned by
[Cauldron Authentication](/authentication/introduction#startauthenticationflow-microsoftaccesstoken).
The username and UUID are read from the token.

If no token is provided, the game launches in **demo mode**.

If the token cannot be read, the command exits with `Invalid Token` (`no_account` in headless mode).

### Overrides

Overrides are passed as comma separated `key=value` pairs.

| Key         | Description                           |
|-------------|---------------------------------------|
| `ram`       | Maximum RAM (GB)                      |
| `ram_low`   | Minimum RAM (GB)                      |
| `server_ip` | Join this server when the game starts |
| `username`  | Override the player name              |

Any other keys are ignored. To apply overrides to every launch, use
[custom_args.json](/cli/introduction#custom_argsjson).
