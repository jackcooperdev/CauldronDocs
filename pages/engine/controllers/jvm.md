---
title: JVM
description: 'JVM Page'
---
# JVM Controller

This controller handles the downloading and sorting of the appropriate JVM version for an installation.

## Functions

### checkCompat (javaVersion, jvmData)

This function checks if the selected JVM version is compatible with the users operating system. It requires two parameters: 

- javaVersion: The selected JVM Version (jvmComp in the main manifest)
- jvmData: The selected JVM Version Manifest Data (jvmMani in the main manifest)

The function will return true or false depending on compatability.


### checkJVM (javaVersion, jvmData)

This function verifies / downloads the required JVM version to the user system.
On completion, it will add the version to jvm_installed.json.

It requires the following parameters:

- javaVersion: The selected JVM Version (jvmComp in the main manifest)
- jvmData: The selected JVM Version Manifest Data (jvmMani in the main manifest)

It will return true if the installation is successful.