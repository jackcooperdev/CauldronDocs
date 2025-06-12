---
title: Launch Builder
description: 'Launch Builder Page'
---

# Launch Builder

This tool is in charge of building the launch script and creating the log file.

> Info: For Information on Launch Arguments
> go [here](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Launching_the_game#Arguments)

## Functions

### logInjector (logFile, sessionID)

This injects the sessionID and log location into the logFile to separate log files for each session.

It takes the following parameters:

+ `logFile`: Path of the original log file.
+ `sessionID`: Current Session ID

### buildJVMRules (manifest, libraryList, versionData, overrides)

This functions builds the Java half of the launch command.

The parameters are:

+ `manifest`: The version specific Manifest (spec
  in [getManifests](/engine/controllers/manifest#getmanifests-versionloaderloaderversion) function)
+ `libraryList`: List of libraries for this version. (
  See [here](/engine/controllers/library#getlibraries-librarydata-versiondata-manifestid) for information on how to get
  that list)
+ `versionData`: versionData in [getManifests](/engine/controllers/manifest#getmanifests-versionloaderloaderversion)
  function
+ `overrides`: Click [here](/engine/controllers/launcher#overrides) for information on overrides.

### buildGameRules (manifest, loggedUser, overrides)

This functions builds the Game half of the launch command.

It takes the following parameters:

+ `manifest`: The version specific Manifest (spec
  in [getManifests](/engine/controllers/manifest#getmanifests-versionloaderloaderversion) function)
+ `loggedUser`: is an object that includes all data needed to successfully authenticate a Minecraft User

> For Information on how to retrieve this data,
> click [here](/authentication/introduction#startauthenticationflow-access_token) to learn more.
>
>Example of a loggedUser object

```json
{
  "xui": "11405000004278212345",
  "user_id": "00000000-ef01-2345-6789-abcdef012345",
  "access_token": "MINECRAFT_ACCESS_TOKEN",
  "profile": {
    "uuid": "069a79f444e94726a5befca90e38aaf5",
    "username": "Notch"
  }
}
```

+ `overrides`: Click [here](/engine/controllers/launcher#overrides) for information on overrides.

### buildFile (manifest, jreVersion, jvmRules, gamesRules)

This function builds the complete launch file and writes it to a file ready for launch.

It takes the following parameters:

+ `manifest`: The version specific Manifest (spec
  in [getManifests](/engine/controllers/manifest#getmanifests-versionloaderloaderversion) function)
+ `jreVersion`: jvmComp in [getManifests](/engine/controllers/manifest#getmanifests-versionloaderloaderversion) function
+ `jvmRules`: The data created from the [buildJVMRules](#buildjvmrules-manifest-librarylist-versiondata-overrides)
  function
+ `gameRules`: The data created from the [buildGameRules](#buildgamerules-manifest-loggeduser-overrides) function

It will build the launch file and create a file in the scripts' folder. This will be ready to launch.