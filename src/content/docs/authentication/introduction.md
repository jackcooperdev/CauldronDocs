---
title: Cauldron Authentication
description: 'Overview of Cauldron Authentication'
sidebar:
    label: Overview
---

> This Documentation is correct for
> version [1.3.5](https://github.com/jackcooperdev/CauldronAuthentication/releases/tag/1.3.5) of CauldronAuthentication

## What does this do?

Cauldron Authentication is responsible
for authenticating Minecraft Users
using the [Microsoft Authentication System](https://minecraft.wiki/w/Microsoft_authentication)
which is the only way to log in to Mojang now.
This package provides all the tools needed to acquire a Minecraft Access token from an oauth token.

## License Information

This project is licensed under [GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/) so please make sure that your
project follows the license guidelines.

## Setup

To Install the package, run the following command

```
npm i @jackcooperdev/cauldronauthentication
```

To use this package, you need to provide a way to get a Microsoft access token.
To do this, you need to create an Azure application.
See [here](https://blog.jackcooper.me/posts/inside-authenticator) for more information.

## Using Cauldron Authentication

```js
const { startAuthenticationFlow } = require('@jackcooperdev/cauldronauthentication');

const account = await startAuthenticationFlow(microsoftAccessToken);
console.log(account.profile.username);
```

### Launching the game

Pass the `access_token` from the result to Cauldron Engine's
[startGame](/engine/controllers/client#startgame-version-loaderinfo-authinfo-overrides). The engine reads the
username and UUID from the token itself.

```js
const { startGame } = require('@jackcooperdev/cauldronengine/client');

await startGame('1.20.1', { type: 'vanilla' }, account.access_token);
```

## Functions

### startAuthenticationFlow (microsoftAccessToken)

This function performs the authentication flow turning a microsoft access token into a minecraft access token and
getting the profile information for the user.

It takes the following parameters

+ `microsoftAccessToken` - Microsoft Access Token Acquired through oAuth flow.

The function runs each step of the [MAS](/authentication/mas) flow in order and resolves with the following object.

```json
{
  "profile": {
    "uuid": "069a79f444e94726a5befca90e38aaf5",
    "username": "Notch"
  },
  "xui": "0000000000000000",
  "access_token": "MINECRAFT_ACCESS_TOKEN",
  "user_id": "aaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaa"
}
```

+ `profile`: The player's Minecraft username and UUID
+ `xui`: The Xbox user hash
+ `access_token`: Minecraft access token (valid for 24 hours)
+ `user_id`: The account's user id. This is not the Minecraft UUID

### Errors

If no token is passed, the function rejects with `NO_ACCESS_TOKEN`.

If any step fails, the function rejects with an object containing the error code of the step that failed.

```json
{ "error": "XBOXLIVE_AUTH_FAIL" }
```

| Error                | Step                                                                   |
|----------------------|------------------------------------------------------------------------|
| `XBOXLIVE_AUTH_FAIL` | [authenticateXboxLive](/authentication/mas#authenticatexboxlive-access_token) |
| `MOJANG_FAIL`        | [authorizeMojang](/authentication/mas#authorizemojang-token)            |
| `MINECRAFT_FAIL`     | [authenticateMinecraft](/authentication/mas#authenticateminecraft-token-userhash) |
| `PROFILE_GET_ERROR`  | [getProfileData](/authentication/mas#getprofiledata-access_token). Also occurs if the account does not own Minecraft |

## Additional Modules

| Name                       | Import                                      | Description                                 |
|----------------------------|---------------------------------------------|---------------------------------------------|
| [MAS](/authentication/mas) | `@jackcooperdev/cauldronauthentication/mas` | Provides Access to the individual functions |

## Information

Wiki.vg was a great resource that provided lots of information on how various parts of Minecraft works.
It has been merged into Minecraft Wiki
and can be viewed [here](https://minecraft.wiki/w/Microsoft_authentication#Navigation)
