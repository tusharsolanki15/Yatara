import "./App.module.scss";
import Incident from "./components/Incident";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Incident/>
    </QueryClientProvider>
    </>
  );
}

export default App;
