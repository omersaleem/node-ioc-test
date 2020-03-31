# Initial Setup

To run this IOC Container, NodeJS 10.x and above is required and follow the
installation...

1) From a shell cd into the source directory, eg `cd ./node-ioc-test`
2) Install dependencies, `npm install`

# Run the App

This is a very simple app that demonstartes the IOC Container in action that creates a couple of model instances injecting dependencies. To run the app...

```
npm start
```

The app transpiles using babel and uses the nodemon package to enable watch feature to reload the app when source code is updated.

Babel was added to try and use Javascript decorators to enable the dependency injection in the class definition.

# Debugging

To run the app to enable debugging use the command `npm run debug`. Once running, open Google Chrome and enter `chrome://inspect` in the url bar and select the `Open dedicated DevTools for Node` link. The app should be at a breakpoint at the start of app.

# Testing

No tests have been added yet other than a boilerplate sample test. Mocha JS has been installed and can be run using `npm test`.

Testing should be easy to implement as stubs for services can be registered using `unregister` and `regsiter` to mock the services.
