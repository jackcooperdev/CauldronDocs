---
title: Client Controller
sidebar:
  label: Client
description: 'Client Page'
---

This controller allows for a game client to be installed or launched onto the target system. It replaces the
`launcher` controller from earlier versions.

## Functions

### installGame (version, loaderInfo)

Parameters:

+ `version`: Game Version (e.g. `1.20.1`). Use `release` / `latest` or `snapshot` for the latest version
+ `loaderInfo`: An object describing the loader. See [here](#loader-info). (Defaults to `{ type: 'vanilla' }`)

This function gathers everything required for the selected version
(using [getCEObject](/engine/controllers/manifest#getceobject-installobject)) and then verifies / downloads the client
jar, assets, libraries and logging config through the [queue](/engine/controllers/queue).

The JVM is only verified and downloaded if its folder (`jvm/<jreVersion>`) does not exist yet.

Any loader post processors (e.g. Forge / NeoForge) are run once the files are installed, and the libraries they create
are added to `libList`.

If the loader is not supported, an error is logged and the install falls back to `vanilla`.

The function will return the [CE Object](/engine/controllers/manifest#ce-object) for the installation.

> Versions that have been installed before can be installed and launched offline. See
> [Offline Use](/engine/introduction#offline-use).

### startGame (version, loaderInfo, authInfo, overrides)

Parameters:

+ `version`: Game Version
+ `loaderInfo`: An object describing the loader. See [here](#loader-info).
+ `authInfo`: Authentication Data for the logged-in user. See [here](#auth-info).
+ `overrides`: JVM and Game argument overrides. See [here](#overrides). (Optional)

This function will:

1. Install the game using [installGame](#installgame-version-loaderinfo), including any loader post processors
2. Create a session ID and inject it into the logging config (or set up [legacy logging](#legacy-logging) if the
   version has no logging config)
3. Extract natives into `.temp` in the Cauldron folder
4. Build the launch script (see [Launch Builder](/engine/tools/launch))
5. Spawn the game as a detached process

The function finishes when the boot process starts. It will return the session ID.

The `.temp` folder is removed automatically once the game closes.

## Examples

> Example, Launching a 1.7.10 vanilla client with no overrides

```js
const { startGame } = require('@jackcooperdev/cauldronengine/client');

const sessionID = await startGame('1.7.10', { type: 'vanilla' }, authData);
// Returns SessionID
```

> Example, Launching a 1.20.1 forge client with a specific loader version and overrides

```js
const sessionID = await startGame('1.20.1', { type: 'forge', version: '47.3.0' }, authData, {
    jvm: { launcher_name: 'CauldronMC', ram: '8' },
    game: { game_directory: '/home/user/.cauldron/instances/my-pack' }
});
// Returns SessionID
```

> Example, Installing a 1.21.1 neoforge client without launching

```js
const { installGame } = require('@jackcooperdev/cauldronengine/client');

const ceObject = await installGame('1.21.1', { type: 'neoforge' });
// Returns CE Object
```

## Appendix

### Loader Info

```json
{
  "type": "forge",
  "version": "47.3.0"
}
```

+ `type`: One of `vanilla`, `forge`, `fabric` or `neoforge`
+ `version`: (Non-Vanilla Only) Exact loader version to use. Use `release`, or leave out, for the recommended loader
  version

### Auth Info

> For Information on how to retrieve this data, check out the [Cauldron Authentication](/authentication/introduction)
> plugin.

`authInfo` can be supplied in one of three forms.

**Account Object**

```json
{
  "token": "MINECRAFT_ACCESS_TOKEN",
  "accountData": {
    "xuid": "2535400000000000",
    "sub": "00000000-0000-0000-0000-000000000000",
    "pfd": [
      {
        "id": "069a79f444e94726a5befca90e38aaf5",
        "name": "Notch"
      }
    ]
  }
}
```

**Access Token String**

The Minecraft access token (JWT) as a string. The username, UUID, XUID and client ID are decoded from the token.

**Demo**

```json
{ "demo": true }
```

Launches with a placeholder `Demo` user.

### Overrides

**Overrides** (or flag overrides) are changes made to how Minecraft boots. There are two types of override, `game` and
`jvm`.

> Example of an override object

```json
{
  "game": {
    "version_type": "CauldronMC",
    "game_directory": "C:\\Users\\User\\AppData\\Roaming\\.cauldron\\instances\\my-pack",
    "server_ip": "play.example.com"
  },
  "jvm": {
    "launcher_name": "CauldronMC",
    "ram": "8",
    "ram_low": "4"
  }
}
```

`jvm` overrides:

| Key             | Description                  | Default          |
|-----------------|------------------------------|------------------|
| `launcher_name` | Launcher name passed to Java | `CauldronEngine` |
| `ram`           | Maximum RAM (GB)             | `8`              |
| `ram_low`       | Minimum RAM (GB)             | `4`              |

`game` overrides:

| Key              | Description                                                         |
|------------------|---------------------------------------------------------------------|
| `game_directory` | Directory the game runs in. Also used as the working directory      |
| `version_type`   | Version type shown on the title screen                              |
| `server_ip`      | Joins this server on launch (`--quickPlayMultiplayer` / `--server`) |
| `username`       | Overrides the player name                                           |
| `uuid`           | Overrides the player UUID                                           |

> For A full list of arguments
> click [here](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Launching_the_game#Arguments)

### Legacy Logging

Versions without a log4j logging config (1.5.2 and older) cannot send their logs to Cauldron themselves. For these
versions `startGame` instead:

1. Redirects the game's output to `sessionLogs/<sessionID>/raw.log`
2. Reads new lines from that file while the game runs, formats them like log4j output
   (`[HH:MM:SS] [main/LEVEL]: message`) and writes them to `sessionLogs/<sessionID>/mcLogs.log`
3. Sends the formatted lines to `127.0.0.1` on ports `9500` and `9501`, the same as the log4j config does for newer
   versions

This means [startMCListening](/engine/tools/logger#startmclistening-) works the same way for every version. The log
level (`INFO`, `WARN` or `ERROR`) is guessed from each message, and stack traces are logged as `ERROR`. Logging stops
when the game closes.
