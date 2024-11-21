
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Books from "./components/Books";
import HomePage from "./components/HomePage";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className=" flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <HomePage />
        </div>
      </main>
    </QueryClientProvider>
  );
}
