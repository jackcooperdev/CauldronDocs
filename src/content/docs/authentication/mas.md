---
title: MAS
description: 'MAS page'
---

# MAS (Microsoft Authentication Scheme)

These Functions are used for the authentication flow. They can be used separate if needed.

## Functions

### authenticateXboxLive (access_token)

It takes the following parameters:

+ `access_token`: Valid Microsoft Access Token

If the access token is invalid, it will return `XBOXLIVE_AUTH_FAIL`

The function returns an Xbox Live Token to be used in the following function.

### authorizeMojang (token)

It takes the following parameters:

+ `token`: Token generated from authenticateXboxLive.

If the token is invalid, it will return `MOJANG_FAIL`

**Response**

```json
{
  "IssueInstant": "2020-12-07T19:52:09.2345095Z",
  "NotAfter": "2020-12-08T11:52:09.2345095Z",
  "Token": "token",
  "DisplayClaims": {
    "xui": [
      {
        "uhs": "userhash"
      }
    ]
  }
}

```

The key items to take note of are:

+ `token`
+ `userhash`

### authenticateMinecraft (token, xuid)

It takes the following parameters

+ `token`: Token generated from authorizeMojang.
+ `userhash`: Generated from authenticateXboxLive.

If the token is invalid, it will return `MINECRAFT_FAIL`

If the access token is valid, it will return the following

```json
{
  "username": "UUID (Not account uuid)",
  "roles": [],
  "access_token": "MINECRAFT_ACCESS_TOKEN",
  "token_type": "Bearer",
  "expires_in": 86400
}

```
The key items to take note of are:
+ `UUID`: This is the accounts user id. Not the Minecraft UUID
+ `MINECRAFT_ACCESS_TOKEN`: This is the access token to authenticate with Minecraft.

### verifyMinecraft (access_token)

It takes the following parameters:

+ `access_token`: Access token generated from authenticateMinecraft

This verifies that the access token is a valid Minecraft access token.

If the token is invalid, it will return `false`.

If the token is valid, it will return `true`.

### getProfileData (access_token)

It takes the following parameters:

+ `access_token`: Access token generated from authenticateMinecraft

If the token is invalid, it will return `PROFILE_GET_ERROR`.

If the access token is valid, it will return the following

```json
{
  "uuid": "MINECRAFT_UUID",
  "username": "MINECRAFT_USERNAME"
}
```
