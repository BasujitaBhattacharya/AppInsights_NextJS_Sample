import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const connectionString = `<InstrumentationKey>`;

const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    connectionString,
    enableAutoRouteTracking: true,
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: {},
    },
  },
});
appInsights.loadAppInsights();
appInsights.trackPageView();

export { reactPlugin, appInsights };
