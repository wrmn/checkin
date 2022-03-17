import Head from "next/head";
import Image from "next/image";
import MainButton from "../components/button";
import DigiClock from "../components/clock";

const Home = () => {
  return (
    <div className="flex flex-col h-24 min-h-screen bg-gradient-to-t from-zinc-300 to-gray-300 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 w-full px-3 text-center">
        <div className="flex flex-row w-full px-5 py-5 -mt-5 rounded-full bg-gradient-to-r from-zinc-200 ">
          <Image src="/logo.png" alt="Vercel Logo" width={66} height={80} />

          <h1 className="px-4 py-5 font-mono text-4xl font-bold text-left underline">
            DINAS PERPUSTAKAAN DAN KEARSIPAN KOTA PADANG
          </h1>
        </div>
        <div className="flex flex-row justify-center w-full text-center h-3/4">
          <div className="flex-col inline-block w-5/12 align-middle">
            <div className="flex flex-row justify-center w-full text-center h-1/4 ">
              <div className="flex flex-col">
                <h1 className="pt-4 text-5xl font-bold ">SELAMAT DATANG</h1>
                <h1 className="text-2xl font-bold -pt-4">Silahkan Check-in</h1>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full text-center h-3/4 ">
              <Image
                priority
                src="/hero.svg"
                alt="Hero SVG"
                layout="intrinsic"
                width={"300%"}
                height={"50vh"}
              />
            </div>
          </div>

          <div className="flex-col inline-block w-5/12  rounded-full bg-gradient-to-l from-zinc-200">
            <div className="my-10">
              <div className="text-2xl pr-24 font-bold">
                Pilih Metode Check-in
              </div>
            </div>
            <div className="my-4 ">
              <MainButton title="Scan Dari Smartphone" />
            </div>

            <div className="my-4">
              <MainButton title="Scan Kartu Member" />
            </div>

            <div className="my-4">
              <MainButton title="Checkin Tamu (Bukan Member)" />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center w-full pt-5 -mt-20 text-center">
          <div className="flex-col inline-block w-10/12 pt-3 h-40 rounded-full align-middle bg-gradient-to-r from-zinc-400">
            <DigiClock />
          </div>
        </div>
      </main>

      <footer className="flex items-center rounded-full  bg-gradient-to-l from-zinc-200  justify-center w-full h-24 ">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
