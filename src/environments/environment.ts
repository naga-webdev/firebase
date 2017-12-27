// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCA3jwY24UrKd1sTuF_FnYc8c5_otWBlJE",
    authDomain: "hotel-booking-91f30.firebaseapp.com",
    databaseURL: "https://hotel-booking-91f30.firebaseio.com",
    projectId: "hotel-booking-91f30",
    storageBucket: "hotel-booking-91f30.appspot.com",
    messagingSenderId: "455831327365"
  }
};
