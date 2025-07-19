---
title:  CauldronAPI Managment
description: 'API Page '
---

These commands manage credentials linked to the CLI to access the API.

### login
Login to CauldronAPI


Usage:
```bash
cauldroncli login [options]
```

+ `-l` `--device_code`: Device Code (Used for Headless Use See [here]() for information)
+ `-h` `--headless`: Removes User Prompts

Logs the user in CauldronAPI

### logout
Logout from CauldronAPI

Usage:
```bash
cauldroncli logout
```

This removes the account from the CLI.
