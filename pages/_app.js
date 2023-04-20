import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}
