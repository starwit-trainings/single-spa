# single-spa

see https://single-spa.js.org/

## Prerequisites 

* Install create-single-spa
    ```
    sudo npm install --global create-single-spa
    ```
## Creating preconfigured apps:

* Create root app
    ```
    mkdir root
    cd root
    npx create-single-spa --moduleType root-config
    rm .git
    ```

* Create app as module and follow the instructions in the command line to add it to root app
    ```
    mkdir app1
    cd app1
    npx create-single-spa --moduleType app-parcel
    rm .git
    ```

## Check Webapp
* check webapp composition with  https://single-spa-playground.org/playground
* e.g. for vue (app2) go to http://single-spa-playground.org/playground/instant-test?name=@starwit/app2&url=%2F%2Flocalhost%3A4000%2Fjs%2Fapp.js&framework=vue to see it working!

## Run it all in dev mode

* run root (port 9000):
    * open new shell or command line
    ```
    cd root
    npm start
    ```
* run react navbar (app1, port 8500):
    * open new shell or command line
    ```
    cd app1
    npm start
    npm start -- --port 8500
    ```
* run vue (app2, port 4000):
    * open new shell or command line
    ```
    cd app2
    npm install
    npm run serve -- --port 4000
    ```
* run angular (app3, port 4200):
    * open new shell or command line
    ```
    cd app3
    npm install
    npm start
    ```

