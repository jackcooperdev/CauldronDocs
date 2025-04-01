---
title: JVM
description: 'JVM Page'
---
# JVM Controller

This controller handles the downloading and sorting of the appropriate JVM version for an installation.

## Functions

### checkCompat (javaVersion, jvmData)

Parameters:
+ `javaVersion`: JVM Version Name (jvmComp in [getManifests](/engine/controllers/manifest#getmanifests-versionloaderloaderversion) function)
+ `jvmData`: Array of JVM Versions and OS's (jvmMeta in [getManifests](/engine/controllers/manifest#getmanifests-versionloaderloaderversion) function)


This function checks if the selected JVM version is compatible with the users operating system. It requires two parameters: 

The function will return true or false depending on compatability.

### checkJVM (javaVersion, jvmData)

Parameters:
+ `javaVersion`: JVM Version Name (jvmComp in [getManifests](/engine/controllers/manifest#getmanifests-versionloaderloaderversion) function)
+ `jvmData`: The selected JVM Version Manifest Data (jvmMani in [getManifests](/engine/controllers/manifest#getmanifests-versionloaderloaderversion) function)

This function verifies / downloads the required JVM version to the user system.
On completion, it will add the version to jvm_installed.json.

It will return true if the installation is successful.