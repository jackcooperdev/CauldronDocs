---
title: MAS (Microsoft Authentication Scheme)
description: 'MAS page'
sidebar:
    label: MAS
---

These Functions are used for the authentication flow. They can be used separately if needed.
[startAuthenticationFlow](/authentication/introduction#startauthenticationflow-microsoftaccesstoken) calls them in
the order below.

```js
const { authenticateXboxLive } = require('@jackcooperdev/cauldronauthentication/mas');
```

> Each function throws an `Error` whose message is the error code shown (e.g. `XBOXLIVE_AUTH_FAIL`) if the request fails.

## Functions

### authenticateXboxLive (access_token)

It takes the following parameters:

+ `access_token`: Valid Microsoft Access Token

The function returns an Xbox Live Token to be used in the following function.

If the access token is invalid, it throws `XBOXLIVE_AUTH_FAIL`.

### authorizeMojang (token)

It takes the following parameters:

+ `token`: Token generated from [authenticateXboxLive](#authenticatexboxlive-access_token).

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

+ `Token`
+ `uhs` (the user hash)

If the token is invalid, it throws `MOJANG_FAIL`.

### authenticateMinecraft (token, userhash)

It takes the following parameters

+ `token`: `Token` from [authorizeMojang](#authorizemojang-token).
+ `userhash`: `uhs` from [authorizeMojang](#authorizemojang-token).

If the token is valid, it will return the following

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

+ `username`: This is the account's user id. Not the Minecraft UUID
+ `access_token`: This is the access token to authenticate with Minecraft.

If the token is invalid, it throws `MINECRAFT_FAIL`.

### verifyMinecraft (access_token)

It takes the following parameters:

+ `access_token`: Access token generated from [authenticateMinecraft](#authenticateminecraft-token-userhash)

This checks the account's entitlements to verify that the user owns Minecraft. The response is checked against
Mojang's public key.

It returns `true` if the account owns the game and `false` otherwise. This function does not throw.

### getProfileData (access_token)

It takes the following parameters:

+ `access_token`: Access token generated from [authenticateMinecraft](#authenticateminecraft-token-userhash)

If the access token is valid, it will return the following

```json
{
  "uuid": "MINECRAFT_UUID",
  "username": "MINECRAFT_USERNAME"
}
```

If the token is invalid, or the account does not own Minecraft, it throws `PROFILE_GET_ERROR`.
