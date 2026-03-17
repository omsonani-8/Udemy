import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { Providers } from "./redux/Provider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Providers>
        <Router>
        </Router>
      </Providers>
    </QueryClientProvider>
  );
}

export default App;