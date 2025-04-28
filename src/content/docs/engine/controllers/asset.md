---
title: Assets
description: 'Assets Page'
---

# Asset Controller

This controller handles the downloading and sorting of assets for an installation.

## Functions

### getAssets (assetsIndex, assetsFile)

Parameters:

+ `assetsIndex`: Asset Index ID (1.7.10, pre-1.6, legacy, etc)
+ `assetsFile`: Converted Assets Index (assetsInfo
  in [getManifests](/engine/controllers/manifest#getmanifests-versionloaderloaderversion) function output)

This function takes the index name (found in the spec portion of the main manifest) and the assetsFile (assetsInfo in
the main manifest) and verifies / downloads the missing files. It will then add an entry into assets_installed.json.

The function will return true when completed.
    