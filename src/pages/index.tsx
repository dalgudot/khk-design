import Head from 'next/head';

export default function Home() {
  const typeTest: String = 'Hi Typescript';

  return (
    <div>
      <h1>{typeTest}</h1>
    </div>
  );
}
