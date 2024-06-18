# Cauldron Engine
 
## What does this do?
Cauldron Engine is a NodeJS based minecraft launcher. It handles both authentication and the actual boot process. It supports all vanilla versions of minecraft. Additionally there is support for plugins where additional loaders (such as forge) can be booted.

## Can I use this?
Yes, however be aware that this engine has been made to work for Cauldron and there may be issues when implementing into other projects. Also there may be issues with authentication that will be addressed in the documentation. This project is licensed under [GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/) so please make sure that your project follows the license guidelines.

## Setup

This package is not hosted on the npm registry (yet) this is due to the fact its not 100% ready for use. Currently its hosted on the Github Package Registry. To Install this package you need to add the following file to your project.

### .npmrc
```
@jackcooper04:registry=https://npm.pkg.github.com
```

once you have done this you can install the package normally through

```
npm install @jackcooper04/cauldronengine
```

Once you have installed the package go [here](/engine/authentication) to get started.

Or go [here](/engine/launcher/introduction) to read into how a launcher actually works

