// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // API_URL: 'http://localhost:5000/api/'
  API_URL: 'http://52.150.38.40:5000/api/',
  firebase: {
    apiKey: "AIzaSyDGvpn4uYVuJJ6l3jbB86XRbjjKLnoSVII",
    authDomain: "pensions-de287.firebaseapp.com",
    databaseURL: "https://pensions-de287.firebaseio.com",
    projectId: "pensions-de287",
    storageBucket: "pensions-de287.appspot.com",
    messagingSenderId: "42020850309",
    appId: "1:42020850309:web:942056f98f3cd081c4f7ec",
    measurementId: "G-7PDLQVM4V9"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
