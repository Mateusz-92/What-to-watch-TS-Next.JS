import ComponentWrapper from "@/components/Layout/ComponentWrapper/ComponentWrapper";
import BottomBar from "@/components/bottom_bar/bottomBar";
import Logo from "@/components/common/headers/Logo";

import "@/styles/globals.css";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    queryCache: new QueryCache(),
    defaultOptions: {
      queries: {
        gcTime: 60_000,
      },
    },
  });
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}{" "}
        <ComponentWrapper>
          <Logo />
          <Component {...pageProps} />
          <BottomBar />
        </ComponentWrapper>
      </QueryClientProvider>
    </div>
  );
}
