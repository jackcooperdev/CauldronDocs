---
title: Queue Controller
sidebar:
  label: Queue
description: 'Queue Page'
---

This controller handles the creation of download queues.
This controller is used in every instance where a bulk number of files are required to be downloaded.

## Functions

### verifyInstallation (queue, isAssetDownload)

This function takes the following parameters:

+ `queue`: Array with objects in the [following format](#queue-format).
+ `isAssetDownload`: Whether the queue contains assets.

Each item is checked against its SHA1 checksum and downloaded if it is missing or invalid.
On Linux and macOS, `.jar` files and items marked `isExecutable` are made executable.

The function will return an empty array once every item has been verified. If an item cannot be downloaded, the
function will reject with `File Not Found: <origin>`.

## Appendix

### Queue Format

```json
{
  "origin": "URL of Item",
  "destination": "Path of item (excluding file name)",
  "fileName": "The file name",
  "sha1": "SHA1 Checksum (Input NONE to skip verification)",
  "isExecutable": "(Optional) Make the file executable after download",
  "isNative": "(Optional) Whether the item is a native library"
}
```

> `origin` may contain `${resourcePath}`, which is replaced with the `RESOURCE_SERVER` address when downloading.
