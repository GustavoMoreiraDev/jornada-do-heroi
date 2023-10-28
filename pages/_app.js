import "@/styles/globals.css";
import DataProv from "@/context/data";
import CombateProv from "@/context/combate";
import PersoProv from "@/context/personagens";

export default function App({ Component, pageProps }) {
  return (
    <DataProv>
      <CombateProv>
        <PersoProv>
          <Component {...pageProps} />
        </PersoProv>
      </CombateProv>
    </DataProv>
  );
}
