---
title: Welcome to Cauldron
description: Get started building your docs site with Starlight.
template: doc
---
# Welcome to Cauldron

## What is Cauldron?

Cauldron is a collection of projects
aiming to create a cli-based minecraft launcher that allows for the user to create and share profiles
(both vanilla and modded) to friends.
In the future, more social aspects will aim to be created;
also server creation tools are planned to be added allowing for seamless server creation from profiles.

## Why?

Recently, the official minecraft launcher has become larger and larger and boot times have slowed down.
Additionally,
I wanted to create a mod launcher which is straightforward to use (like CurseForge)
but make it easier to share private modpacks with friends
without having to share modpack files every time a change is made.

This project is not meant to replace any existing projects
(such as [minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node) by Voxelum)
and is more to prove to myself that I can complete a project from start to finish.
This project will always be free to use when ready for release and will remain open-sourced.
With that in mind, this project aims
to create a flexible system where profiles and modpacks can be shared seamlessly through different clients,
for example, a web-based client or through discord.

## Projects inside Cauldron

> Some packages may be unavailable while in development

| Name                                                                                  | Import                                                                   | Description                                                                                           |
|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| [CauldronCLI](https://docs.cauldronmc.com/cli/introduction)                           | [Latest Releases](https://github.com/jackcooperdev/CauldronCLI/releases) | Client that manages profiles and provides a CLI and websocket interface for other applications to use |
| CauldronAPI                                                                           | Private                                                                  | REST API Responsible for saving profiles and modpacks.                                                |
| [CauldronEngine](https://docs.cauldronmc.com/cli/engine/introduction)                 | ```@jackcooperdev/cauldronengine/```                                     | Responsible for Downloading and Running Minecraft Instances                                           |
| [CauldronAuthentication](https://docs.cauldronmc.com/cli/authentication/introduction) | ```@jackcooperdev/cauldronauthentication/```                             | Responsible for Authenticating Minecraft Users                                                        |
| [packwiz_js](https://docs.cauldronmc.com/cli/packwizjs)                               | ```@jackcooperdev/packwiz_js/```                                         | NodeJS package that assists in creating / converting packwiz modpacks to JSON                         |

