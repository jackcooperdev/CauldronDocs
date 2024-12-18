---
title: Queue
description: 'Queue Page'
---
# Queue Controller

This controller handles the creation of download queues.
This controller is used in every instance where a bulk number of files are required to be downloaded.

## Functions

### verifyInstallation (queue)

This function takes the parameter queue. This is an array of objects, and the object should be in the following format.

```json
{
  "origin": "URL of Item",
  "destination": "Path of item (excluding file name)",
  "fileName": "The file name",
  "sha1": "SHA1 Checksum (Input NONE to skip verification)"
}
```

This function will loop until all files have been downloaded or an item fails a set number of times.
The function will return an array of failed items.
