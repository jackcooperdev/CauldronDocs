---
title: Session Manager
description: 'Session Page'
---
# Session Manager

This toolset has functions that allow for the creation and management of game sessions.

## Functions

### createUUID()

Creates and returns a unique UUID.

### createSession(data)

This creates a session the data field is the following

```json
{
    "type": "game",
    "version": "version",
    "loader": "loader",
    "overrides": "overrides"
}
```

This object is an example of a **game** session. You can create any type of session other than game.

This function will return the session ID.

### checkForGameSession ()

This functions returns true or false depending on if there is a game session active.


### getSession (sessionID)

This function gets the information assigned to the session

### destroySession (sessionID)

This function deletes the session.