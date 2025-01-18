---
title: Library
description: 'Library Page'
---
# Library Controller

This controller handles the downloading and sorting of the required libraries for an installation.

## Functions

### getLibraries (libraryData, versionData, manifestID, customName)

This function verifies / downloads the required libraries to the user system.

It requires the following parameters:

+ `libraryData`: An array of the libraries included in this installation (found in spec. Libraries in the main manifest).
+ `versionData`: An object of information about the version (found under versionData in the main manifest)
+ `manifestID`: Game Version
+ `customName`: Custom Name used when logging installed libraries. (Only needed for non-vanilla clients)

On completion, the function will return the array of library paths. (To be used in launch).