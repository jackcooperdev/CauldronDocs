---
title:  Minecraft Account Managment
description: 'MC Account Page '
---

These commands manage Minecraft Accounts attatched to the CLI .


### add
Add A Minecraft Profile


Usage:
```bash
cauldroncli add [options]
```

Options:

+ `-d` `--debug`: Debug Mode
+ `-l` `--device_code`: Device Code (Used for Headless Use See [here]() for information)
+ `-h` `--headless`: Removes User Prompts

This opens a web browser (If Non-Headless) prompting the user to add their account. Once complete the account is added to CLI

### remove
Remove A Minecraft Profile

Usage:
```bash
cauldroncli remove
```

Options:

+ `-d` `--debug`: Debug Mode
+ `-a` `--account`: Account ID to Remove (See [list](#list) to see how to get the ids)
+ `-h` `--headless`: Removes User Prompts

This opens an interactive prompt (If Non-Headless) to remove a certain account. Once completed the account is removed from the CLI

### refresh
Refresh all signed in Minecraft Profiles


Usage:
```bash
cauldroncli refresh
```

Options:

+ `-d` `--debug`: Debug Mode
+ `-h` `--headless`: Removes User Prompts

This refreshes all signed in accounts.

### list
List All Minecraft Accounts

> Note: This command is only really for headless users as running `remove` will provide a list of users.


Usage:
```bash
cauldroncli list
```

Options:

+ `-d` `--debug`: Debug Mode
+ `-h` `--headless`: Removes User Prompts


