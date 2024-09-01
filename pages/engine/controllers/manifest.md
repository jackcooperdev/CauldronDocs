# Manifest Controller

This controller handles aquiring the various manifests and other relevent data required to launch the game.

## Functions

### getManifests (version,loader,loaderVersion)

This function collects all the needed data to launch the selected version it returns the following object.

```json
{
    "main":"Contains Current Version Manifest (Object)",
    "spec":"Contains Version Manifest of selected Version (Object)",
    "logging":"Contains Custom Log File for selected version (Object)",
    "jvmMeta":"Contains JVM Manifest (Object)",
    "jvmMani":"Contains Info for required JVM Version (Object)",
    "jvmComp":"JVM Version Name (String)",
    "assets":"Contain Assets Manifest For Version (Object)",
    "assetsInfo":"Contains Converted Asset Manifest",
    "version":"Current Version (String)",
    "versionData":"Information including loader, version and loaderVersion (Object)",
    "loader":"Current Loader (String)",
    "assetsDownloaded":"Whether or not assets have been downloaded on local system (Boolean)",
    "jvmDownloaded":"Whether or not JVM have been downloaded on local system (Boolean)",
    "loaderVersion":"Loader Version (String)"
}
```

To see a complete example of the output click [here](http://files.jackcooper.me/exampleManifest.json).


### checkManifest (fileName, url, isAsset, type)
This function checks if the declared manifest exists on the system and if not it downloads and writes the file to the system.

> The Variable 'type' can be left blank or declared as 'main' declaring it as main will always update it. (For Example for the main version manifest.)

> isAsset needs to be flagged as true if the manifest is a asset manifest.


**Response**

If the function succeeds it will return the requested information.

If the client is offline the following error will occur.
```
This Profile Cannot be launched offline. Please Launch it Online first
```
