---
title: File Tools
description: 'File Tools Page'
---

# File Tools

This tools provides a way of downloading, extracting and verifying files.

## Functions

### download (url, location, fileName)

This function downloads the declared file.

It takes the following parameters:

+ `url`: URL of the object you want to download
+ `location`: Download destination without the file name
+ `fileName`: File Name

It will return `true` / `false` dependent on whether the file downloads successfully.

### validate (fileObject)

This function takes a file object in the [following format](/engine/controllers/queue#queue-format).

It will resolve `true` if successful, and it will return the `fileObject` if it fails.