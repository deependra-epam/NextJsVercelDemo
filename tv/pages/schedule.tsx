import Head from "next/head";
import Image from "next/image";
import banner1 from "../public/banner1.png";

export default function Schedule() {
  return (
    <div className="screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div id="container">
          <div id="monitor">
            <div id="monitorscreen">
              {/* Added schedule components here */}
              <Image src={banner1} alt="Sample" />
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}