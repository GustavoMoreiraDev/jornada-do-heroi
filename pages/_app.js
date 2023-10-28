import "@/styles/globals.css";
import DataProv from "@/context/data";
import PersoProv from "@/context/personagens";

export default function App({ Component, pageProps }) {
  return (
    <DataProv>
      <PersoProv>
        <Component {...pageProps} />
      </PersoProv>
    </DataProv>
  );
}
