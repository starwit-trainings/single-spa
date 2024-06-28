# single-spa

sudo npm install --global create-single-spa


mkdir root
cd root
npx create-single-spa --moduleType root-config
rm .git

mkdir app1
cd app1
npx create-single-spa --moduleType app-parcel
npm start -- --port 8500

https://single-spa-playground.org/playground

http://single-spa-playground.org/playground/instant-test?name=@starwit/app2&url=%2F%2Flocalhost%3A8080%2Fjs%2Fapp.js
