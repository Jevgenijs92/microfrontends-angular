# mf.manifest.json (or API)

```
{
    "faq": {
        "remoteEntry": "http://localhost:4201/remoteEntry.js",
        "exposedModule": "faq",
        "route": "faq",
        "routeConfigName": "AppRoutingModule"
    }
}
```
### key ("faq")
The unique key to identify remote app. Configured inside the webpack.config.json for the remote app.

### remoteEntry
The url to the remoteEntry.js file.

### Exposed module
When using exposedModule inside loadRemoteModule, the name should match the name of the module inside the webpack.config.json for the remote app.

### route
The route to the remote app. This is the route that will be used to lazy load the remote app.

### routeConfigName
The name of the routing module for the remote app. This is the name of the module that will be used to lazy load the remote app.


