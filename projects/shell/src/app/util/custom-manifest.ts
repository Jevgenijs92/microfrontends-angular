import { Manifest, RemoteConfig } from "@angular-architects/module-federation";
 
export type CustomRemoteConfig = RemoteConfig & {
    exposedModule: string;
    route: string;
    routeConfigName: string;
    displayName: string;
};

export type CustomManifest = Manifest<CustomRemoteConfig>;