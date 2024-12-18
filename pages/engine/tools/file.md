---
title: File Tools
description: 'File Tools Page'
---
# File Tools

This tools provides a way of downloading, extracting and verifying files.

## Functions

### download (url, location, fileName)

This function downloads the declared file. The location must be the full path without the fileName.

### extract (filePath)

This function extracts the declared file.

### validate (fileObject)

This function takes a file object in the following format.

```json
{
    "destination":"File Destination",
    "sha1":"File SHA1 (input NONE to skip)",
    "fileName":"File Name"
}
```

It will resolve true if successful, and it will return the fileObject if it fails.