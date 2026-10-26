---
title: Queue Controller
sidebar:
  label: Queue
description: 'Queue Page'
---

This controller handles the creation of download queues.
This controller is used in every instance where a bulk number of files are required to be downloaded.

## Functions

### verifyInstallation (queue, isAssetDownload, label)

This function takes the following parameters:

+ `queue`: Array with objects in the [following format](#queue-format).
+ `isAssetDownload`: Whether the queue contains assets.
+ `label`: (Optional) Text shown next to the progress bar (Default: `Downloading Files`)

Each item is checked against its SHA1 checksum and downloaded if it is missing or invalid.
On Linux and macOS, `.jar` files and items marked `isExecutable` are made executable.

The function will return an empty array once every item has been verified. If an item cannot be downloaded, the
function will reject with `File Not Found: <origin>`.

If the client is offline and a file is missing or invalid, the function rejects with the
[corrupted installation error](/engine/tools/file#download-url-location-filename).

#### Progress Bars

While the queue is processed, each type of file has its own progress bar showing how many files have been processed
and how many were missing or invalid and had to be downloaded. A summary is shown when every file has been processed.

```
[info] Downloading Files
  Client     ████████████████████████████     1/1     100%  1 downloaded
  Libraries  ████████████████████████████    58/58    100%  12 downloaded
  Java       ███████████████████░░░░░░░░░    97/142    68%  97 downloaded
  Assets     ███████░░░░░░░░░░░░░░░░░░░░░   902/3599   25%  140 downloaded
```

```
[info] Done in 13.0s: 3795 files downloaded, 5 already installed
```

Files are grouped by the folder they are installed to (see [Folder Layout](/engine/controllers/manifest#folder-layout)).
Types with no files in the queue are not shown.

The progress bars are written to stderr, and only when stderr is a terminal. They are not shown when the output is
piped or redirected (for example when CauldronCLI runs in headless mode), so JSON output is not affected.

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
