import * as React from "react";
import * as ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./error-boundary";

window.React = React
window.ReactDOM = ReactDOM

const Tasks = React.lazy(() =>
  import("http://127.0.0.1:8002/js/import-mod.js").then((Mod) => {
    Mod.configure({ React, version: "8.3.2" });
    return Mod;
  })
);

function App() {
  return (
    <div>
      <h1>Howdy!</h1>

      <React.Suspense fallback={<span>waiting</span>}>
        <ErrorBoundary>
          <Tasks config={{ configuredFetch: () => void 0 }} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Tasks explode />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
}

const container = document.getElementById("container");
const root = createRoot(container);
root.render(<App />);
