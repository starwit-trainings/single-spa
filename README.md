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
