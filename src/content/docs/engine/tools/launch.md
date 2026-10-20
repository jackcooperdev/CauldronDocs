---
title: Launch Builder
description: 'Launch Builder Page'
---

This tool is in charge of building the launch script and creating the log file.

> Most projects will not need this tool directly.
> [startGame](/engine/controllers/client#startgame-version-loaderinfo-authinfo-overrides) calls it for you.

> Info: For Information on Launch Arguments
> go [here](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Launching_the_game#Arguments)

## Functions

### logInjector (logFile, sessionID)

This injects the log location into the logging config so each session has its own log file
(`sessionLogs/<sessionID>/mcLogs.log`). The result is written to `.temp/log_config.xml`.

It takes the following parameters:

+ `logFile`: Path of the original log file.
+ `sessionID`: Current Session ID

### buildJVMRules (manifest, libraryList, versionData, overrides)

This functions builds the Java half of the launch command.

The parameters are:

+ `manifest`: The version spec (found at `specPath` in the [CE Object](/engine/controllers/manifest#ce-object))
+ `libraryList`: List of library paths (`libList` in the [CE Object](/engine/controllers/manifest#ce-object))
+ `versionData`: An object containing the game version, e.g. `{ "version": "1.20.1" }`
+ `overrides`: JVM overrides. Click [here](/engine/controllers/client#overrides) for information on overrides.

Returns an array of JVM arguments.

### buildGameRules (manifest, loggedUser, overrides)

This functions builds the Game half of the launch command.

It takes the following parameters:

+ `manifest`: The version spec (found at `specPath` in the [CE Object](/engine/controllers/manifest#ce-object))
+ `loggedUser`: Authentication data. See [Auth Info](/engine/controllers/client#auth-info) for the accepted formats.
+ `overrides`: Game overrides. Click [here](/engine/controllers/client#overrides) for information on overrides.

Returns an array of game arguments.

### buildFile (manifest, jreVersion, jvmRules, gameRules)

This function builds the complete launch command and writes it to a file ready for launch.

It takes the following parameters:

+ `manifest`: The version spec
+ `jreVersion`: `jreVersion` in the [CE Object](/engine/controllers/manifest#ce-object)
+ `jvmRules`: The data created from the [buildJVMRules](#buildjvmrules-manifest-librarylist-versiondata-overrides)
  function
+ `gameRules`: The data created from the [buildGameRules](#buildgamerules-manifest-loggeduser-overrides) function

The script is written to `.temp/launch.sh` (Linux / macOS) or `.temp/launch.bat` (Windows) and its path is returned.

### buildLaunchScript (manifest, jreVersion, sessionName)

This function builds a launch script for a dedicated server.

It takes the following parameters:

+ `manifest`: The server version spec
+ `jreVersion`: JVM Version Name
+ `sessionName`: Folder name of the server in `servers/`

The server is started with 4GB of RAM and [Aikar's Flags](https://mcflags.emc.gs). The script is written to
`scripts/launch-server.sh` (Linux / macOS) or `scripts/launch-server.bat` (Windows) and its path is returned.
