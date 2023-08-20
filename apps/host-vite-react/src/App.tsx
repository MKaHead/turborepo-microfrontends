import { lazy, Suspense, useState } from "react";
import { HostPage } from "ui";
import "./index.css";

const RemoteViteReactPage = lazy(() => import("remote-vite-react"));

function App() {
  const [toggleMicrofrontend, setToggleMicrofrontend] = useState(false);

  return (
    <HostPage hostType="Vite React" remoteComponents={<span></span>}>
      <button onClick={() => setToggleMicrofrontend(!toggleMicrofrontend)}>
        toggle microfrontend
      </button>
      <Suspense>
        {toggleMicrofrontend && <RemoteViteReactPage withHostApp />}
      </Suspense>
    </HostPage>
  );
}

export default App;
