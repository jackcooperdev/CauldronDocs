# Launching the Game

Launching the Game is simple and only needs one function.

First ensure that you have valid authentication data in this format:
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

The following code example:

```js
const { launchGame } = require('@jackcooper04/cauldronengine/launcher');

async function launch() {
    const startLaunch = await launchGame('1.7.10',false,'vanilla','',authData);
};

launch();
```

The launch game 
