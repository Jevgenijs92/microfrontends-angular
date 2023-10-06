import { initFederation } from '@angular-architects/module-federation';

initFederation('http://localhost:3000/manifest') // http://localhost:3000/manifest | assets/mf.manifest.json
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
