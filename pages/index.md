---
title: Welcome
description: 'Welcome to Cauldron Documentation'
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

## Projects inside Cauldron

| Name                                                   | Import                                                                    | Description                                                                                     |
|--------------------------------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| [CauldronAgent](/agent/introduction)                   | [Latest Releases](https://github.com/jackcooper04/CauldronAgent/releases) | Client that manages profiles and provides an local REST interface for other applications to use |
| [CauldronAPI](/api_docs/introduction)                  |                                                                           | REST API Responsible for saving profiles                                                        |
| [CauldronEngine](/engine/introduction)                 | ```@jackcooper04/cauldronengine/```                                       | Responsible for Downloading and Running Minecraft Instances                                     |
| [CauldronAuthentication](/authentication/introduction) | ```@jackcooper04/cauldronauthentication/```                               | Responsible for Authenticating Minecraft Users                                                  |
| [packwiz_js](/packwizjs/introduction)                  | ```@jackcooper04/packwiz_js/```                                           | NodeJS package that assists in creating / converting packwiz modpacks to JSON                   |
