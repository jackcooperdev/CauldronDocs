---
title: File Tools
description: 'File Tools Page'
---

This tools provides a way of downloading and verifying files.

## Functions

### download (url, location, fileName)

This function downloads the declared file.

It takes the following parameters:

+ `url`: URL of the object you want to download. `${resourcePath}` is replaced with the `RESOURCE_SERVER` address.
+ `location`: Download destination without the file name
+ `fileName`: File Name

It will return `true` / `false` dependent on whether the file downloads successfully. Downloads are retried up to 50
times.

> If the client is offline, the download is skipped and `true` is returned.

### validate (fileObject)

This function takes a file object in the [following format](/engine/controllers/queue#queue-format).

It will resolve:

+ `true` if the checksum matches
+ `"pass"` if the `sha1` is `NONE` and the file exists, or the destination is `no path`
+ the `fileObject` if the file is missing or the checksum does not match

### createUUID()

Returns a random v4 UUID. This is used for session IDs.
