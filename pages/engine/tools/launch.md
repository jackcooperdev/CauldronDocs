# Launch Builder

This tool is in charge of building the launch script

> Info: For Information on Launch Arguments go [here](https://wiki.vg/Launching_the_game#Arguments)

## Functions

### logInjector (logFile, sessionID)

This injects the sessionID into the logFile in order to seperate log files for each session.

### buildJVMRules (manifest, libraryList, versionData, overrides)

This functions builds the Java half of the launch command.

The parameters are:

- manifest - The version specific Manifest (spec in the main manifest)
- libraryList - List of libraries for this version. (See [here](/engine/controllers/library#getlibraries-librarydata-versiondata-manifestid) for information on how to get that list)
- versionData - (versionData in main manifest)
- overrides - Click [here](/engine/controllers/library#getlibraries-librarydata-versiondata-manifestid) for information on overrides.

### buildGameRules (manifest, loggedUser, overrides)

This functions builds the Game half of the launch command.

The parameters are:

- manifest - The version specific Manifest (spec in the main manifest)
- loggedUser is an object that includes all data needed to succesfully authentciate a Minecraft User

> For Information on how to retreive this data click [here]() to learn more.
> Example of a loggedUser object

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
- overrides - Click [here](/engine/controllers/library#getlibraries-librarydata-versiondata-manifestid) for information on overrides.

### buildFile (manifest, jreVersion, jvmRules, gamesRules)

This function builds the complete launch file and writes it to a file ready for launch.

The parameters are:

- manifest - The version specific Manifest (spec in the main manifest)
- jreVersion (jvmComp in main manifest)
- jvmRules - The data created from the [buildJVMRules](/engine/tools/launch#buildjvmrules-manifest-librarylist-versiondata-overrides) function
- gameRules - The data created from the [buildGameRules](/engine/tools/launch#buildgamerules-manifest-loggeduser-overrides) function