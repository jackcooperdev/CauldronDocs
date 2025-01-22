---
title: Logger
description: 'Logger Page'
---
# Logger
The Logger creates a universal and clean way
of displaying both the application logs and Minecraft logs at the same time.
It uses the [log4js](https://www.npmjs.com/package/log4js) package to achieve this.

> Logs are displayed in the application console as well as in a file under "cauldron_engine_logs" in the root folder. Additionally, it is broadcast on tcp port 25568 on localhost.

## Functions

### cauldronLogger

The main function is cauldronLogger, and the following are the different log types.

#### .info(message)
<span style="color:green">[2024-09-02T11:39:59.715] [INFO] Cauldron - </span> This is a Info Message

#### .trace(message)
<span style="color:blue">[2024-09-02T11:39:59.715] [TRACE] Cauldron - </span> This is a Trace Message

#### .debug(message)
<span style="color:cyan">[2024-09-02T11:39:59.715] [DEBUG] Cauldron - </span> This is a Debug Message

#### .warn(message)
<span style="color:yellow">[2024-09-02T11:39:59.715] [WARN] Cauldron - </span> This is a Warning Message

#### .error(message)
<span style="color:red">[2024-09-02T11:39:59.715] [ERROR] Cauldron - </span> This is a Error Message


### attachLoggerSession (id)

It takes the parameter:
+ `id` : Session ID

Setting the logger session links the session to the next instance of Minecraft launched. This allows for the session to be automatically destroyed when the game is quit.