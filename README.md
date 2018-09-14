# Description

This is a very minimal proof of concept of how one could trigger a houdini render with variables from a web interface served by a node.js server.

POSTing a value to the node.js server calls _renderScript.py_ with the submitted value. In the _renderScript.py_ you can see how you can load the _cliRender.hipnc_ file and access its nodes and values. In this case a random seed is being set and apllied to the height of some boxes. Files will be rendered to ./render_output.

# Dependencies

+ Houdini (free version is sufficent)
+ Python
+ Node.js + NPM

# Install

`npm install`

You need to have the houdini env Variables initialized so either [add them to you bash profile](https://houdinitricks.com/quicktip-os-x-environment-setup-for-houdini-2/) or run houdini_setup from the houdini resource folder.

# Run

`node app.js`

+ go to _localhost:3000_ 
+ set a random seed and submit

