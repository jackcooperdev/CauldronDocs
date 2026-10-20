---
title: Logger
description: 'Logger Page'
---

# Logger

This tool provides the engine's logger and a listener for logs sent from a running Minecraft instance.

## Exports

### cauldronLogger

A [consola](https://github.com/unjs/consola) instance used for all engine output (`info`, `warn`, `error`, `debug`,
etc.).

```js
const { cauldronLogger } = require('@jackcooperdev/cauldronengine/logger');

cauldronLogger.info('Hello from Cauldron');
```

## Functions

### startMCListening ()

Starts a TCP server on `127.0.0.1:9500` that receives log output from Minecraft (sent by the injected logging config)
and prints it with the matching log level.

The function resolves `true` when the game disconnects and rejects if the server cannot start (for example, if the port
is already in use).

### attachLoggerSession (id)

It takes the parameter:

+ `id`: Session ID returned by [startGame](/engine/controllers/client#startgame-version-loaderinfo-authinfo-overrides)

Associates the logger with a session.
