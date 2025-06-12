---
title:  Installation Managment
description: 'Installation Page '
---

These commands manage the installation of CauldronCLI. They can be run in two ways

## Through the CLI

### setup

Usage:
```bash
cauldroncli setup
```

This function will perform the following actions:

1. Download JVM amd Packwiz
2. Log you Into CauldronAPI
3. Ask if you would like to add a Minecraft Account

> You can change the root path by changing the variable in cauldroncli_admin.json which exists in your user folder.
> After changing the path it is recommended to run `cauldroncli uninstall`  before changing the path.

Once these actions are completed the cli is ready to be used.

### reset

Usage:
```bash
cauldroncli reset
```

This function will perform the following actions:
1. Uninstall CauldronCLI
2. Download JVM amd Packwiz

> You can change the root path by changing the variable in cauldroncli_admin.json which exists in your user folder.
> After changing the path it is recommended to run `cauldroncli uninstall` before changing the path.

Once these actions are completed the cli is ready to be used.

### uninstall

Usage:
```bash
cauldroncli uninstall
```

This function will perform the following actions:

1. Log You out of CauldronAPI
2. Uninstall CauldronCLI


## Through Websocket
> WIP