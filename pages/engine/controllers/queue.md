---
title: Queue
description: 'Queue Page'
---
# Queue Controller

This controller handles the creation of download queues.
This controller is used in every instance where a bulk number of files are required to be downloaded.

## Functions

### verifyInstallation (queue, isAssetDownload)

This function takes the following parameters:

+ `queue`: Array with objects in the [following format](#queue-format).
+ `isAssetDownload`: Whether the queue contains assets. This changes how many concurrent downloads occur.

This function will loop until all files have been downloaded or an item fails a set number of times.

The function will return an array of failed items in the [same](#queue-format) format.


## Appendix

### Queue Format

```json
{
  "origin": "URL of Item",
  "destination": "Path of item (excluding file name)",
  "fileName": "The file name",
  "sha1": "SHA1 Checksum (Input NONE to skip verification)"
}
```