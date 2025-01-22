---
title: Cauldron Agent
description: 'Index page for Cauldron Agent'
---

# Cauldron Agent

> This Documentation is correct for version [0.5.1](https://github.com/jackcooperdev/CauldronAgent/releases/tag/0.5.1)
> of CauldronAgent

## What does this do?

CauldronAgent provides an internal REST API that acts as a Minecraft Launcher
and can manage vanilla profiles and maintain and sync / update modded profiles.
Paired with an external API, it allows for profiles to be synced and shared.

## License Information

This project is licensed under [GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/) so please make sure that your
project follows the license guidelines.

## Setup

To Install the package, run the following command

## Using CauldronEngine

Cauldron Engine is split into multiple exports. They are listed below.

### Controllers

| Name                                                                     | Import                                        | Description                                   |
|--------------------------------------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| [Launcher](https://docs.cauldronmc.com/engine/controllers/launcher)      | ```@jackcooperdev/cauldronengine/launcher```  | Manages the launching of a Minecraft Instance |
| [Manifest](https://docs.cauldronmc.com/engine/controllers/manifest)      | ```@jackcooperdev/cauldronengine/manifest```  | Acquires Relevant Data for launch             |
| [Assets](https://docs.cauldronmc.com/engine/controllers/asset)           | ```@jackcooperdev/cauldronengine/assets```    | Manages Asset Download                        |
| [JVM](https://docs.cauldronmc.com/engine/controllers/jvm)                | ```@jackcooperdev/cauldronengine/jvm```       | Manages JVM Download                          |
| [Libraries](https://docs.cauldronmc.com/engine/controllers/library)      | ```@jackcooperdev/cauldronengine/libraries``` | Manages Library Download                      |
| [Queue Management](https://docs.cauldronmc.com/engine/controllers/queue) | ```@jackcooperdev/cauldronengine/queue```     | Manages Download Queues                       |

### Tools

| Name                                                                    | Import                                          | Description                                 |
|-------------------------------------------------------------------------|-------------------------------------------------|---------------------------------------------|
| [Logger](https://docs.cauldronmc.com/engine/tools/logger)               | ```@jackcooperdev/cauldronengine/logger```      | Logging                                     |
| [Compatability](https://docs.cauldronmc.com/engine/tools/compat)        | ```@jackcooperdev/cauldronengine/compat```      | Tool to Ensure Cross-Platform Compatability |
| [File Tools](https://docs.cauldronmc.com/engine/tools/file)             | ```@jackcooperdev/cauldronengine/fileTools```   | Set of Tools to download / verify files     |
| [Session Manager](https://docs.cauldronmc.com/engine/tools/session)     | ```@jackcooperdev/cauldronengine/session```     | Manages Minecraft Sessions                  |
| [Check Connection](https://docs.cauldronmc.com/engine/tools/connection) | ```@jackcooperdev/cauldronengine/online```      | Checks if Client is Online                  |
| [Auth Verifier](https://docs.cauldronmc.com/engine/tools/auth)          | ```@jackcooperdev/cauldronengine/auth```        | Check Access Token Validity                 |
| [Launch File Builder](https://docs.cauldronmc.com/engine/tools/launch)  | ```@jackcooperdev/cauldronengine/launchBuild``` | Builds launch File                          |

### Plugins

Plugins are used to allow for other loaders to be used for more information go [here]().

## Information

For information on how a launcher works, this blog post by Ryan Cao explains it brilliantly.
[Inside a Minecraft Launcher](https://ryanccn.dev/posts/inside-a-minecraft-launcher/)

Wiki.vg was a great resource that provided lots of information on how various parts of Minecraft works.
It has been merged into Minecraft Wiki
and can be viewed [here](https://minecraft.wiki/w/Microsoft_authentication#Navigation)