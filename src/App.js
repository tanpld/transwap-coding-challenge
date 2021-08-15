import CountrySelection from "./components/CountrySelection";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CountrySelection />
    </QueryClientProvider>
  );
}

export default App;
