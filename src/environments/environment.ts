// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BaseUrl: 'localhost3000/api/',
  firebaseConfig : {
    apiKey: "AIzaSyDkfMxdjlhdxJKIGaPssfMu6tPtP3Bun00",
    authDomain: "placement-portal-9c359.firebaseapp.com",
    databaseURL: "https://placement-portal-9c359.firebaseio.com",
    projectId: "placement-portal-9c359",
    storageBucket: "placement-portal-9c359.appspot.com",
    messagingSenderId: "337269310372",
    appId: "1:337269310372:web:65717618e05d9836457731",
    measurementId: "G-MQ80LCL3ZW"
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
