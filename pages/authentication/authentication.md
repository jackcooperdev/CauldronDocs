# Authentication

In order to sign in into your Minecraft account you need to authenticate yourself with the Mojang servers. The engine itself does not have authentication in built and requires the following object when launching.

```json
{
    "access_token":"Account Access Token",
    "user_id":"Account User ID",
    "xui":"Account User Hash",
    "profile":{
        "uuid":"Minecraft Account UUID",
        "username":"Minecraft Account Username",
    }
}
```
There are two options to get this information

## #1 Creating your own Authenticator

> For a more detailed guide on this refer to [this](https://wiki.vg/Microsoft_Authentication_Scheme) wiki.vg page.

### Step One: Setting up the Azure Application

1. First of all you need to create a [Microsoft Azure](https://azure.microsoft.com/en-gb) Account.
2. Then you need to make a Azure Application. Refer to [this](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) guide for help.
3. Next you need to setup a OAuth 2.0 authorization flow where the user will be presented with a login page where it will end in a specified URL. More info [here](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow).
> Note: Ensure that you include XboxLive.signin in the scope field else you will run into issues.

4. You now need permission to use api.minecraftservices.com. To do that you can use this [form](https://aka.ms/mce-reviewappid). From personal experience this can take a couple of months if its taking to long you can follow up the form with [this](enforce@minecraft.net) email.

### Step Two: Getting the Access Token

Now that you have your Microsoft access token we can use that to aquire a Minecraft Access Token

> **Remember!** You need to have permission api.minecraftservices.com to follow these steps. Doing so without permission will return a 403 error.

1. Authenticate with Xbox Live 
> **Note:** Ensure you set Content Type to application/json and Accept to application/json
```
POST https://user.auth.xboxlive.com/user/authenticate
```
```
<access_token> = Microsoft Access Token 
```
```json
 {
    "Properties": {
        "AuthMethod": "RPS",
        "SiteName": "user.auth.xboxlive.com",
        "RpsTicket": "d=<access_token>"
    },
    "RelyingParty": "http://auth.xboxlive.com",
    "TokenType": "JWT"
 }
 ```

 Your response will look like this.

 ```json
  {
   "IssueInstant":"2020-12-07T19:52:08.4463796Z",
   "NotAfter":"2020-12-21T19:52:08.4463796Z",
   "Token":"token", // This is the Xbox Live Token
   "DisplayClaims":{
      "xui":[
         {
            "uhs":"userhash" //This goes in the XUI field in the auth object
         }
      ]
   }
 }
 ```

 2. Obtaining a XSTS Token for Minecraft

 ```
 POST https://xsts.auth.xboxlive.com/xsts/authorize
 ```
 ```json
  {
    "Properties": {
        "SandboxId": "RETAIL",
        "UserTokens": [
            "xbl_token" // Use Xbox Live Token from above
        ]
    },
    "RelyingParty": "rp://api.minecraftservices.com/",
    "TokenType": "JWT"
 }
 ```

The reponse will look like this

```json
 {
   "IssueInstant":"2020-12-07T19:52:09.2345095Z",
   "NotAfter":"2020-12-08T11:52:09.2345095Z",
   "Token":"token", // XSTS Token
   "DisplayClaims":{
      "xui":[
         {
            "uhs":"userhash" // same as last request
         }
      ]
   }
}
```

3. Authenticate with Minecraft
```
POST https://api.minecraftservices.com/authentication/login_with_xbox
```

```json
{
    "identityToken": "XBL3.0 x=<userhash>;<xsts_token>"
}
```

Response will be
```json
 {
  "username" : "some uuid", // User ID in auth object
  "roles" : [ ],
  "access_token" : "minecraft access token", // This is your access token for Minecraft
  "token_type" : "Bearer",
  "expires_in" : 86400
 }
 ```

From here we now need to ensure that the user actually owns Minecraft and Get Profile Information for that account.

4. Checking Game Ownership
```
GET https://api.minecraftservices.com/entitlements/mcstore
```

You need to add the following header:
```
Authorization: Bearer {ACCESS TOKEN}
```

Response will be this:

```json
 {
  "items" : [ {
    "name" : "product_minecraft",
    "signature" : "jwt sig"
  }, {
    "name" : "game_minecraft",
    "signature" : "jwt sig"
  } ],
  "signature" : "jwt sig",
  "keyId" : "1"
 }
 ```

 In this response three jwts are returned the first contains the following values:

 ``` json
  {
  "typ": "JWT",
  "alg": "RS256",
  "kid": "1"
 }.{
  "signerId": "2535416586892404",
  "name": "product_minecraft"
 }.[Signature]
 ```

 The last contains:

 ```json
  {
  "typ": "JWT",
  "alg": "RS256",
  "kid": "1"
 }.{
  "entitlements": [
    {
      "name": "product_minecraft"
    },
    {
      "name": "game_minecraft"
    }
  ],
  "signerId": "2535416586892404"
 }.[Signature]
 ```

 If the user does not own the game the entitlments array will be empty.

5. Getting Profile Data

```
GET https://api.minecraftservices.com/minecraft/profile
```
You need to add the following header:
```
Authorization: Bearer {ACCESS TOKEN}
```

Response will look like this
``` json
 {
  "id" : "986dec87b7ec47ff89ff033fdb95c4b5", // Account UUID
  "name" : "HowDoesAuthWork", // Account Username
  "skins" : [ {
    "id" : "6a6e65e5-76dd-4c3c-a625-162924514568",
    "state" : "ACTIVE",
    "url" : "http://textures.minecraft.net/texture/1a4af718455d4aab528e7a61f86fa25e6a369d1768dcb13f7df319a713eb810b",
    "variant" : "CLASSIC",
    "alias" : "STEVE"
  } ],
  "capes" : [ ]
 }
 ```

 From here you have all the data needed to launch the game.


## #2 Using Cauldron Authenticator

> **Warning!** 
Using this option may mean that you have limited flexability and may stop working in the event that that my server goes down. I recommend using this option but to provide your own credentials. As seen [here](#step-one-setting-up-the-azure-application).

Go [here] for information on using this authenticator.