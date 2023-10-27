import '@/styles/globals.css'
import DataProv from '@/context/data';

export default function App({ Component, pageProps }) {
  return (
    <DataProv>
        <Component {...pageProps} />
    </DataProv>
  )
};
