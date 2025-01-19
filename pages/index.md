---
title: Cauldron
description: 'Index page for Cauldron'
---

# Welcome to Cauldron

## What is Cauldron?

Cauldron is a collection of projects
aiming to create a web-based minecraft launcher that allows for the user to create and share profiles
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

| Name                                                   | Import                                                                    | Description                                                                                     |
|--------------------------------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| [CauldronAgent](/agent/introduction)                   | [Latest Releases](https://github.com/jackcooper04/CauldronAgent/releases) | Client that manages profiles and provides an local REST interface for other applications to use |
| CauldronAPI                                            | Private                                                                   | REST API Responsible for saving profiles and modpacks.                                          |
| [CauldronEngine](/engine/introduction)                 | ```@jackcooper04/cauldronengine/```                                       | Responsible for Downloading and Running Minecraft Instances                                     |
| [CauldronAuthentication](/authentication/introduction) | ```@jackcooper04/cauldronauthentication/```                               | Responsible for Authenticating Minecraft Users                                                  |
| [packwiz_js](/packwizjs)                               | ```@jackcooper04/packwiz_js/```                                           | NodeJS package that assists in creating / converting packwiz modpacks to JSON                   |

