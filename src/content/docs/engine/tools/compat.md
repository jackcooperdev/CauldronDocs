---
title: Compatibility
description: 'Compatibility Page '
---

# Compatibility

This tool ensures that the engine can work on all operating systems with minimal changes required.

## Functions

### grabPath()

This function will return the root path of the cauldron (.cauldron) folder. The folder is created if it does not exist.

| Operating System | Default Path                    |
|------------------|---------------------------------|
| Windows          | `%APPDATA%\.cauldron`           |
| Linux / macOS    | `~/.cauldron`                   |

> You can change the root path by setting the environment variable `CAULDRON_PATH` to the desired path.  
> Example: `C:\Users\User\projects\Cauldron\.cauldron`

### getOperatingSystem (isJVM)

This function returns the current users operating system.

It takes the following parameters:

+ `isJVM`: States whether the operating system needs to be converted into a format that matches with the operating
  systems stated in JVM files.

| System          | Standard  | `isJVM`         |
|-----------------|-----------|-----------------|
| Windows (x64)   | `windows` | `windows-x64`   |
| Windows (ARM)   | `windows` | `windows-arm64` |
| Windows (x86)   | `windows` | `windows-x86`   |
| Linux           | `linux`   | `linux`         |
| macOS (Intel)   | `osx`     | `macos`         |
| macOS (Apple)   | `osx`     | `mac-os-arm64`  |

Any other operating system will throw `Unsupported Operating System`.

> On Apple Silicon, versions without a native JVM fall back to the Intel JVM using Rosetta.
