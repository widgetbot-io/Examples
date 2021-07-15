import Head from "next/head";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const WidgetBot = dynamic(() => import("@widgetbot/react-embed"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    async function loadCrate() {
      const result = await import("@widgetbot/crate");
      const Crate = await result.cdn();

      new Crate({
        server: "299881420891881473",
        channel: "450428756855750666",
      });
    }

    loadCrate();
  }, []);

  return (
    <div className="bg-gray-800">
      <Head>
        <title>Next.js Example</title>
        <link rel="icon" href="/widgetbot.svg" />
      </Head>

      <main className="flex flex-col space-y-6 items-center justify-center w-full text-center">
        <h1 className="text-white text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <p className="text-white mt-3 text-2xl">
          Get started by editing{" "}
          <code className="bg-gray-400 p-3 font-mono text-md rounded-md">
            pages/index.tsx
          </code>
        </p>

        <section className="flex justify-center h-screen w-screen">
          <WidgetBot
            server="299881420891881473"
            channel="450428756855750666"
            className="w-3/4 h-3/4"
          />
        </section>
      </main>
    </div>
  );
}
