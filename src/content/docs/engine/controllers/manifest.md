---
title: Manifest
description: 'Manifest Page'
---

# Manifest Controller

This controller handles acquiring the various manifests and other relevant data required to launch the game.

## Functions

### getManifests (version,loader,loaderVersion)

Parameters:

+ `version`: Game Version
+ `loader` : Game Loader
+ `loaderVersion`: Loader Version (Non-Vanilla only)

This function collects all the necessary data to launch the selected version it returns the following object.

```json
{
  "spec": "Contains Version Manifest of selected Version (Object)",
  "jvmMani": "Contains Info for required JVM Version (Object)",
  "jvmComp": "JVM Version Name (String)",
  "assets": "Contain Assets Manifest For Version (Object)",
  "assetsInfo": "Contains Converted Asset Manifest",
  "version": "Current Version (String)",
  "versionData": "Information including loader, version and loaderVersion (Object)",
  "loader": "Current Loader (String)",
  "assetsDownloaded": "Whether or not assets have been downloaded on local system (Boolean)",
  "jvmDownloaded": "Whether or not JVM have been downloaded on local system (Boolean)",
  "libsDownloaded": "Whether or not Libraries have been downloaded on local system (Boolean)",
  "loaderVersion": "Loader Version (String)",
  "needsPost": "Whether or not the installation requires post processing",
  "postData": "Data releating to post processing"
}
```

Examples:

+ `1.7.10 Vanilla` [here](http://resources.cauldronmc.com/debug/exampleVanilla.json)
+ `1.7.10 Forge` [here](http://resources.cauldronmc.com/debug/exampleForge.json)

To see a complete example of the output click [here](http://resources.cauldronmc.com/debug/exampleManifest.json).

### checkManifest (fileName, url, type)

Parameters:

+ `fileName`: File name of Manifest
+ `url`: URL of Resource. [Example](https://launchermeta.mojang.com/mc/game/version_manifest.json)
+ `type`: Type of Manifest. See [here](#manifest-types) for types.

This function checks if the declared manifest exists on the system and if not,
it downloads and writes the file to the system.

The function will return the downloaded manifest.

If the client is offline and no offline copy is found, the following error will occur.

```
This Profile Cannot be launched offline. Please Launch it Online first
```

### getPackwizJVM ()

> This is a function directly used in the [Cauldron CLI](/cli/introduction) Project. This may not be useful to you

This function returns the manifests required to allow for the [packwiz](https://packwiz.infra.link/) application to run.

It returns the following object:

```json
{
  "jvmMeta": "Contains JVM Manifest (Object)",
  "jvmMani": "Contains Info for required JVM Version (Object)",
  "jvmComp": "java-runtime-alpha"
}
```

## Appendix

### Manifest Types

> **Note**: Type can be left blank

+ `main`: Indicates a main manifests. Will Also Update the file on every call if connected to the internet
+ `assets`: Indicates an Asset (Standard) manifest usually numbered (15) used on versions >= 1.7.3 and above
  uses [convertAssets]() function to convert.
+ `legacy`: Indicates an Asset (Legacy) manifest used between versions 1.6 to 1.7.2 uses [convertLegacyAssets]()
  function to convert.
+ `pre-1.6`: Indicates an Asset (Pre-1.6) manifest used on versions 1.5.2 and below uses [convertPre16Assets]() function
  to convert.

> Refer to the relevant manifest converter to see information on how the assets are converted. However, knowledge of the
> functions is not needed to use the manifest function.






