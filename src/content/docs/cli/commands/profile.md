---
title:  Profile
description: 'Profile Page '
---

These commands manage the users profiles.


### Create Profile
Create a new profile


Usage:
```bash
cauldroncli create_profile [options]
```

Options:

+ `-v <minecraft_version>` `--version <minecraft_version>`: Minecraft Version
+ `-l <loader>` `--mc_loader <minecraft_loader>`: Minecraft Loader
+ `-t <name>` `--name <name>`: Profile Name
+ `-b` `--boot`: Boot After Create (default: false)
+ `-i` `--dry`: Install but don't launch (default: false)
+ `-h` `--headless`: Removes User Prompts
+ `-d` `--debug`: Extra Debug Information


.option('-p, --profile <type>', 'Minecraft Version', undefined)
.option('-m, --mods <type>', 'List of mods (CSV)', undefined)
.option('-n, --headless', 'Skip Interactive Elements')
.option('-d, --debug', 'output extra debugging information')

### Add Mods
Add mods to modded profile

Usage:
```bash
cauldroncli add_mods [options]
```

Options:

+ `-p <profile>` `--profile <profile>`: Profile ID (Exclude For Interactive List)
+ `-m <mods>` `--mods <mods>`: CSV List of mod slugs.
+ `-h` `--headless`: Removes User Prompts
+ `-d` `--debug`: Extra Debug Information


### Share
Share profile with other user

Usage:
```bash
cauldroncli share [options]
```
Options:

+ `-u <user>` `--user <user>`: User ID of recipent (Required)
+ `-p <profile>` `--profile <profile>`: ID of profile to share
+ `-h` `--headless`: Removes User Prompts
+ `-d` `--debug`: Extra Debug Information

### List Profiles
List Profiles

Usage:
```bash
cauldroncli list_profiles [options]
```

Options:

+ `-h` `--headless`: Removes User Prompts
+ `-d` `--debug`: Extra Debug Information





