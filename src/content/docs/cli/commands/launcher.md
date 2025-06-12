---
title:  Launcher
description: 'Launcher Page '
---

These commands launch instances of Minecraft. They can be run in two ways

## Through the CLI

### launch
Launch an instance of Minecraft that is linked to a profile


Usage:
```bash
cauldroncli launch [options]
```

Options:

+ `-p <profile>` `--profile <profile>`: Profile ID (Exclude For Interactive List)
+ `-m <account_id>` `--account <account_id>`: Minecraft Account ID (see here on how to view them) (Defaults to first in list)
+ `-i` `--dry`: Install but don't launch (default: false)

This will install and launch the requested Minecraft Instance and display the log in the terminal

### quick-launch

Launch an instance of Minecraft that is not linked to a profile

Usage:
```bash
cauldroncli quick-setup [options]
```

Options:

+ `-v <version>` `--mc_version <version>`: Game Version (Required)
+ `-l <loader>` `--mc_loader <loader>`: Game Loader (Default: Vanilla)
+ `-m <account_id>` `--account <account_id>`: Minecraft Account ID (see here on how to view them) (Defaults to first in list)
+ `-i` `--dry`: Install but don't launch (default: false)

This will install and launch the requested Minecraft Instance and display the log in the terminal

## Through Websocket
> WIP