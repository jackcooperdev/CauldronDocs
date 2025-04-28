---
title: File Server Locator
description: 'File Server Page'
---

# File Server Locator

This tools provides the static file server URL and ensures that the server is a registered file server.

## Why?

Because the file server is used to download custom log files and jar files, we need to ensure that the source is
trustworthy.

## How?

Each file server is given a JWT token that is hosted on the file server under /verify. This token contains the server
address and cannot be used on another server.


> Currently, there are only two file servers that can be used.
> + https://files.cauldronmc.com (Default)
> + https://files-dev.cauldronmc.com
>
> In the future, there will be ways to add / sign other file servers for personal use.

To change file servers the environment variable `CAULDRON_STATIC` can be changed to one of the two servers above.

## Functions

### grabStaticFileServer()

This will return the file server location. If it fails it will return `FILE_SERVER_INVALID`.
> Your app should exit on this error as access to a file server is required.