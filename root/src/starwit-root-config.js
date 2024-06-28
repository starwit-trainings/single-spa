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
registerApplication(
  '@starwit/app2',
  () => System.import('@starwit/app2'),
  location => location.pathname.startsWith('/app2/')
);

/*registerApplication(
  '@single-spa/welcome',
  () => System.import('@single-spa/welcome'),
  location => location.pathname.startsWith('/welcome/')
);*/


start();
