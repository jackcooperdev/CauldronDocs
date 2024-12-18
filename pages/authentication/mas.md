---
title: MAS
description: 'MAS page'
---
# MAS (Microsoft Authentication Scheme)

These Functions are used for the authentication flow. They can be used separate if needed.

## Functions

### refreshToken (refresh_token, azureCredentials)

It takes the following parameters

- refresh_token - Valid Refresh Token
- azureCredentials -

```json
{
  "CLIENT_ID": "AZURE_CLIENT_ID",
  "REDIRECT_URI": "REDIRECT_URL",
  "VERIFY_CODE": "CODE_USED_TO_VERIFY_LOGINS"
}
```

If the refresh token is invalid, it will return false.

If its valid token, then it will refresh the token and return the following.

```json
{
  "toSave": {
    "refresh_token": "NEW_REFRESH_TOKEN"
  },
  "toReturn": {
    "access_token": "NEW_ACCESS_TOKEN"
  }
}
```

### redeemToken (azureCredentials, token)

It takes the following parameters

- token: Temporary code that is output from the oauth flow
- azureCredentials -

```json
{
  "CLIENT_ID": "AZURE_CLIENT_ID",
  "REDIRECT_URI": "REDIRECT_URL",
  "VERIFY_CODE": "CODE_USED_TO_VERIFY_LOGINS"
}
```

If the token is invalid, it will return "REDEEM_FAIL."

If its valid token, then it will generate a new refresh token.

```json
{
  "refresh_token": "NEW_REFRESH_TOKEN"
}
```

### authenticateXboxLive (access_token)

It takes the following parameters

- access_token: Valid Access Token

If the access token is invalid, it will return "XBOXLIVE_AUTH_FAIL."

If the access token is valid, it will return the following

```json
{
  "IssueInstant": "2020-12-07T19:52:08.4463796Z",
  "NotAfter": "2020-12-21T19:52:08.4463796Z",
  "Token": "token", // This is referred to as token from now on
  "DisplayClaims": {
    "xui": [
      {
        "uhs": "userhash" // this is referred as xuid
      }
    ]
  }
}
```

### authorizeMojang (token)

It takes the following parameters

- token: Token generated from authenticateXboxLive.

If the token is invalid, it will return "MOJANG_FAIL."

If the access token is valid, it will return the following

```json
{
  "toSave": {"xuid": "SAME_XUID"},
  "toReturn": {
    "IssueInstant": "2020-12-07T19:52:09.2345095Z",
    "NotAfter": "2020-12-08T11:52:09.2345095Z",
    "Token": "token", // this is now referred to as token
    "DisplayClaims": {
      "xui": [
        {
          "uhs": "userhash" // same as last request
        }
      ]
    }
  }
}
```

### authenticateMinecraft (token, xuid)

It takes the following parameters

- token - Token generated from authorizeMojang.
- xuid - Generated from authenticateXboxLive.

If the token is invalid, it will return "MINECRAFT_FAIL."

If the access token is valid, it will return the following

```json
{
  "toSave": {
    "user_id": "UUID (Not account uuid)",
    "access_token": "MINECRAFT_ACCESS_TOKEN"
  },
  "toReturn": {
    "username": "UUID (Not account uuid)", // this is not the uuid of the account
    "roles": [],
    "access_token": "MINECRAFT_ACCESS_TOKEN", // jwt, your good old minecraft access token
    "token_type": "Bearer",
    "expires_in": 86400
  }
}
```

### verifyMinecraft (access_token)

It takes the following parameters

- access_token: Access token generated from authenticateMinecraft

This verifies that the access token is a valid Minecraft access token.

If the token is invalid, it will return false.

If the token is valid, it will return true.

### getProfileData (access_token)

It takes the following parameters

- access_token: Access token generated from authenticateMinecraft

If the token is invalid, it will return "PROFILE_GET_ERROR."

If the access token is valid, it will return the following

```json
{
  "toSave": {
    "username": "MINECRAFT_USERNAME",
    "uuid": "MINECRAFT_UUID"
  },
  "toReturn": {"uuid": "MINECRAFT_UUID", "username": "MINECRAFT_USERNAME"}
}
```
