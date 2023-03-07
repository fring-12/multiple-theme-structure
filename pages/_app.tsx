import "@/styles/globals.css";
import type { AppProps } from "next/app";
import factory from "../themes/factory";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} factory={factory("theme-1")} />;
}
