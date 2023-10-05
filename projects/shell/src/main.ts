import { initFederation } from '@angular-architects/module-federation';

initFederation('assets/mf.manifest.json') //http://localhost:3000/manifest
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
