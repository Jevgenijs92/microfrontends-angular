import { getManifest, loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { CustomManifest } from './custom-manifest';

export function createRoutes(): Routes {
  return Object.entries(getManifest<CustomManifest>()).map(([key, value]) => {
    return {
      path: value.route,
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: key,
          exposedModule: value.exposedModule,
        }).then((m) => m[value.routeConfigName]),
    }
  });
}

export function createNavigationNodes(): { href: string; label: string }[] {
  return Object.entries(getManifest<CustomManifest>()).map(([_, value]) => {
    return {
      href: value.route,
      label: value.displayName
    }
  });
}
