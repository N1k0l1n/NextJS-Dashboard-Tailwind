import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </ThemeProvider>
    </>
  );
}
