---
title: Launcher
description: 'Launcher Page'
---
# Launcher Controller

This controller allows for a game to be installed or launched onto the target system.

## Functions

### launchGame (version, installOnly, loader, loaderVersion, authData, sessionID, overrides)

Parameters:
+ `version`: Game Version
+ `installOnly`: Whether the game should boot or just install
+ `loader`: Game loader (Defaults to Vanilla)
+ `loaderVersion`: (Non-Vanilla Only) Exact loader version to use (Defaults to latest)
  + Mark This as undefined to default only really used for debug or exact profiles
+ `authData`: Authentication Data for the logged-in user. Format [here](#example-auth-data-object)
+ `sessionID`: can either be a UUID created using the [createSession](/engine/tools/session#createSession) function or declared as false to be generated.
+ `overrides`: List of JVM and Game arguments. See [here](#overrides) for information

The function finishes when the boot process starts.
It will return the session ID.
This function launches or installs the game based on the value of the dry variable.

## Examples

> Example, Launching a 1.7.10 vanilla client with no overrides
```js
const launchGame = await launchGame('1.7.10',false,'vanilla','default',authData,false,{});
// Returns SessionID
```

> Example Launching a 1.7.10-forge client with overrides
```js
const launchGame = await launchGame('1.7.10',false,'forge','default',authData,false,{ "jvm": {"launcher_name": "CauldronMC","ram":"8"}});
// Returns SessionID
```

> Example installing a 1.7.10-forge client with overrides
```js
const launchGame = await launchGame('1.7.10',true,'forge','default',authData,false,{ "jvm": {"launcher_name": "CauldronMC","ram":"8"}});
// Returns SessionID
```


## Appendix

### Example Auth Data Object
> For Information on how to retrieve this data, check out the [Cauldron Authentication](/authentication/introduction) plugin.
```json
{
  "xui": "11405986214278243236",
  "user_id": "d3456789-ef01-2345-6789-abcdef012345",
  "access_token": "MINECRAFT_ACCESS_TOKEN",
  "profile": {
    "uuid": "069a79f444e94726a5befca90e38aaf5",
    "username": "Notch"
  }
}
```

### Overrides
**Overrides** (or flag overrides) are changes made to how Minecraft boots. There are two types of override game and jvm.

> Example of an override object

```json
{
  "game": {
    "version_type": "CauldronMC",
    "game_directory": "C:\\Users\\User\\AppData\\Roaming\\.cauldron\\sessions\\66cca7d5a269d9cee27f93d2"
  },
  "jvm": {"launcher_name": "CauldronMC","ram":"8"}
}
```
> For A full list of arguments click [here](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Launching_the_game#Arguments)





