import "../styles/index.scss";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;


// const WidgetBot = dynamic(() => import("@widgetbot/react-embed"), {
//   ssr: false,
// });

// useEffect(() => {
//   async function loadCrate() {
//     const result = await import("@widgetbot/crate");
//     const Crate = await result.cdn();

//     new Crate({
//       server: "299881420891881473",
//       channel: "355719584830980096",
//     });
//   }

//   loadCrate();
// }, []);

{/* <section className="landing-bg w-screen max-w-full h-screen-90 flex items-center justify-center h-screen">
  <WidgetBot
    server="299881420891881473"
    channel="355719584830980096"
    className="w-2/3 h-2/3"
  />
</section> */}