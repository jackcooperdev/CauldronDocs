---
title: Manifest Controller
sidebar:
  label: Manifest
description: 'Manifest Page'
---

This controller handles acquiring the various manifests and other relevant data required to install and launch the
game.

> Most projects will not need this controller directly.
> [installGame](/engine/controllers/client#installgame-version-loaderinfo) calls it for you.

## Functions

### getCEObject (installObject)

Parameters:

+ `installObject`: An object in the following format

```json
{
  "version": "1.20.1",
  "loader": "forge",
  "lv": "release"
}
```

+ `version`: Game Version
+ `loader`: Game Loader (`vanilla`, `forge`, `fabric` or `neoforge`)
+ `lv`: Loader Version. Use `release` for the recommended version

This function downloads the version spec from the resource server (`RESOURCE_SERVER`), along with the JVM, asset and
library manifests, and converts them into a single [CE Object](#ce-object).

The CE Object is cached in `versions/<id>/version.ce` in the Cauldron folder. If a matching cache is found it is
returned without being rebuilt.

If the client is offline and no offline copy is found, the following error will occur.

```
This Profile Cannot be launched offline. Please Launch it Online first
```

If the version (or loader version) cannot be found, the following error will occur.

```
This Profile either does not exist or is not supported
```

### whatIsThis (version, vanillaManifest)

Parameters:

+ `version`: Game Version or alias
+ `vanillaManifest`: Mojang's [version manifest](https://launchermeta.mojang.com/mc/game/version_manifest.json)

This function resolves version aliases.

+ `release` / `latest`: Returns the latest release
+ `snapshot`: Returns the latest snapshot
+ Anything else is returned unchanged

## Appendix

### CE Object

```json
{
  "libList": "Array of library paths to add to the classpath (Array)",
  "nativeList": "Array of native jar paths to extract (Array)",
  "loggingInfo": "Logging config file information (Object)",
  "installQueue": "Every file required for the installation in queue format (Array)",
  "jreVersion": "JVM Version Name (String)",
  "specPath": "Path of the version spec relative to the Cauldron folder (String)",
  "vanillaVersion": "Minecraft Version (String)",
  "loader": "Current Loader (String)",
  "lv": "Loader Version (String)",
  "specName": "Version ID (String)",
  "post": "Post processing data, or false if not required"
}
```

`installQueue` uses the [queue format](/engine/controllers/queue#queue-format).

### Folder Layout

Files are stored in the Cauldron folder (see [grabPath](/engine/tools/compat#grabpath)).

| Folder                        | Contents                                         |
|-------------------------------|--------------------------------------------------|
| `versions/<id>`               | Version spec, client jar and `version.ce` cache  |
| `jvm/<name>`                  | Java runtimes                                    |
| `assets/objects`              | Assets (1.7.3 and above)                         |
| `assets/virtual/legacy`       | Legacy assets (1.6 to 1.7.2)                     |
| `resources`                   | Pre-1.6 assets                                   |
| `assets/log_configs`          | Logging configs                                  |
| `libraries`                   | Libraries                                        |
