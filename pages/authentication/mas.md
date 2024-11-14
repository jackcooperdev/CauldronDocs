# MAS (Microsoft Authentication Scheme)

These Functions are used for the authentication flow. They can be used seperatley if needed.

## Functions

### refreshToken (refresh_token, azureCredentials)

It takes the following parameters

- refresh_token - Valid Refresh Token
- azureCredentials -

```json
{
  "CLIENT_ID": "AZURE_CLIENT_ID",
  "REDIRECT_URI": "REDIECT_URL",
  "VERIFY_CODE": "CODE_USED_TO_VERIFY_LOGINS"
}
```

If the refresh token is invalid it will return false.

If its a valid token then it will refresh the token and return the following.

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

### redeemToken (azureCredentials, token )

It takes the following parameters

- token - Temporary code that is output from the oauth flow
- azureCredentials -

```json
{
  "CLIENT_ID": "AZURE_CLIENT_ID",
  "REDIRECT_URI": "REDIECT_URL",
  "VERIFY_CODE": "CODE_USED_TO_VERIFY_LOGINS"
}
```

If the token is invalid it will return "REDEEMFAIL".

If its a valid token then it will generate a new refresh token.

```json
{
  "refresh_token": "NEW_REFRESH_TOKEN"
}
```

### authenticateXboxLive (access_token)

It takes the following parameters

- access_token - Valid Access Token

If the access token is invalid it will return "XBLIVEAUTHFAIL".

If the access token is valid it will return the following
```json
{
  "IssueInstant": "2020-12-07T19:52:08.4463796Z",
  "NotAfter": "2020-12-21T19:52:08.4463796Z",
  "Token": "token", // This is refered to as token from now on
  "DisplayClaims": {
    "xui": [
      {
        "uhs": "userhash" // this is refered as xuid
      }
    ]
  }
}
```


### authorizeMojang (token)

It takes the following parameters

- token - Token generated from authenticateXboxLive.

If the token is invalid it will return "MOJANGFAIL".

If the access token is valid it will return the following
```json
{"toSave":{ "xuid": "SAME_XUID"},
"toReturn": {
   "IssueInstant":"2020-12-07T19:52:09.2345095Z",
   "NotAfter":"2020-12-08T11:52:09.2345095Z",
   "Token":"token", // this is now refered to as token
   "DisplayClaims":{
      "xui":[
         {
            "uhs":"userhash" // same as last request
         }
      ]
   }
}}
```