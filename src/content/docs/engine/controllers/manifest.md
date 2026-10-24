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

+ `version`: Game Version. Use `release` / `latest` or `snapshot` for the latest version
+ `loader`: Game Loader (`vanilla`, `forge`, `fabric` or `neoforge`)
+ `lv`: Loader Version. Use `release` for the recommended version

This function downloads the version spec from the resource server (`RESOURCE_SERVER`), along with the JVM, asset and
library manifests, and converts them into a single [CE Object](#ce-object).

The CE Object is saved to `versions/<id>/version.ce` in the Cauldron folder. If a valid file already exists it is
returned without being rebuilt. See [version.ce](#versionce) for how the file is stored.

When the client is offline, versions that have been installed before are loaded from the Cauldron folder. Version
aliases (`release`, `snapshot`) are resolved using the saved version manifests.

If the client is offline and the version has not been installed before, the following error will occur.

```
This Profile Cannot be launched offline. Please Launch it Online first
```

If the version (or loader version) cannot be found, the following error will occur.

```
This Profile either does not exist or is not supported
```

### whatIsThis (version, vanillaManifest, loaderManifest, lv)

Parameters:

+ `version`: Game Version or alias
+ `vanillaManifest`: The version manifest from the resource server (`version_manifest.json`)
+ `loaderManifest`: (Optional) The loader's version manifest (`loaders/<loader>/version_manifest.json`)
+ `lv`: (Optional) Loader version or `release`

This function resolves version aliases.

+ `release` / `latest`: The latest release
+ `snapshot`: The latest snapshot
+ Anything else is returned unchanged

Without a `loaderManifest`, the resolved version is returned as a string.

With a `loaderManifest`, an object is returned. If `lv` is `release`, the recommended loader version for that
Minecraft version is looked up. If the version is not supported by the loader, `false` is returned.

```json
{ "v": "1.20.1", "lv": "47.4.0" }
```

### grabCE (path)

Parameters:

+ `path`: Path to a [version.ce](#versionce) file

Reads and verifies a `version.ce` file. Returns the [CE Object](#ce-object), or `false` if the file is invalid.

## Appendix

### CE Object

```json
{
  "libList": "Array of library paths to add to the classpath (Array)",
  "nativeList": "Array of native jar paths to extract (Array)",
  "loggingInfo": "Logging config file information (Object)",
  "installQueue": "Client jar, assets, libraries and logging config in queue format (Array)",
  "javaQueue": "JVM files in queue format (Array)",
  "jreVersion": "JVM Version Name (String)",
  "specPath": "Path of the version spec relative to the Cauldron folder (String)",
  "vanillaVersion": "Minecraft Version (String)",
  "loader": "Current Loader (String)",
  "lv": "Loader Version (String)",
  "specName": "Version ID (String)",
  "post": "Post processing data, or false if not required"
}
```

`installQueue` and `javaQueue` use the [queue format](/engine/controllers/queue#queue-format).

### version.ce

`version.ce` files store the [CE Object](#ce-object) so that versions can be launched quickly and offline.

The file is compressed and encrypted (AES-256-GCM) with a key stored in `ce.key` in the Cauldron folder. The key is
created the first time the engine runs.

When a file is read it is checked to make sure it:

1. Was written with this installation's key and has not been modified
2. Uses the current file format
3. Contains a valid CE Object

If any check fails, a warning is logged and the CE Object is rebuilt. Files from earlier versions of the engine are
rebuilt automatically.

> Deleting `ce.key` causes every `version.ce` file to be rebuilt the next time each version is installed.

### Folder Layout

Files are stored in the Cauldron folder (see [grabPath](/engine/tools/compat#grabpath)).

| Path                             | Contents                                         |
|----------------------------------|--------------------------------------------------|
| `version_manifest.json`          | Saved version manifest (used offline)            |
| `<loader>_version_manifest.json` | Saved loader version manifests (used offline)    |
| `ce.key`                         | Key used for `version.ce` files                  |
| `versions/<id>`                  | Version spec, client jar and `version.ce`        |
| `jvm/<name>`                     | Java runtimes                                    |
| `assets/objects`                 | Assets (1.7.3 and above)                         |
| `assets/virtual/legacy`          | Legacy assets (1.6 to 1.7.2)                     |
| `resources`                      | Pre-1.6 assets                                   |
| `assets/log_configs`             | Logging configs                                  |
| `libraries`                      | Libraries                                        |
