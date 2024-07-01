import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
/*
registerApplication(
  '@starwit/app1',
  () => System.import('@starwit/app1'),
  location => location.pathname.startsWith('/app1/')
);*/

registerApplication(
  '@starwit/app2',
  () => System.import('@starwit/app2'),
  location => location.pathname.startsWith('/app2/')
);

registerApplication({
  name: "@starwit/app3",
  app: () => System.import("@starwit/app3"),
  activeWhen: "/app3"
});

start();
