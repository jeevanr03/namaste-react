#namaste-react

Episode 2 =>

#npm vs npm - npm is used for management (install, uninstall, update) - npx is used for executing.

#^ vs ~ in package.json - ~ is used to auto update major versions - ^ is used to update minor versions.

#Transition dependencies - If one package has its own dependencies and that package has its own dependenciies and so on all the 
packages will be installed.

#Bundlers - used to bundle the code to be shipped to production.

#Parceljs used HMR - Hot Module Replacement => changes in local and saved the server automatically refreshed.
Parcel uses file watching algorithm to help with HMR.
cache for faster build.
image optimization, minification of files, bundling, compress the files, code splitting, differential bundling(support for different versions of browser using browserslist).

Episode 3 => 

Bundlers try and convert HTML into js that browser understand using Babel so that react can render the webpage using js.

Types of components => class based & functional components.
A function that returns a JSX is a functional component.
Importing one component into another is called component composition