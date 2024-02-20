"use client";

import styles from "./page.module.css";
import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "./../instrumentation.next";

import { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";

export default function Home() {
  const appInsights = useAppInsightsContext();
  const metricData = {
    average: +new Date().toDateString(),
    name: "React Component Engaged Time (seconds)",
    sampleCount: 1,
  };
  const additionalProperties = { "Component Name": "MyComponent" };
  if (metricData) {
    appInsights?.trackMetric(metricData, additionalProperties);
  }

  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Landing Page - Demo App Insights Integration</h1>
        </div>
      </main>
    </AppInsightsContext.Provider>
  );
}
