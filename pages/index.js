import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex flex-1">
          <h1 className="font-mono text-xl code">Hello</h1>
        </main>
      </div>
    </>
  );
}
