import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';

async function loadNextResults(page, updateResults) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Client-ID 6ed9f2591074e4e");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders
  };

  const res = await fetch(`https://api.imgur.com/3/gallery/search/top/all/${page}?q=dog-butt`, requestOptions)
  console.log(res);
}

export default function Home() {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState();
  useEffect(() => {
    loadNextResults(page, setResults);
    return () => {
    }
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Welcome to Dog Butt Stuff</h1>
        <p>
          Take a look at this <Link href="/dog/KEMXm0o">dog butt</Link>.
        </p>
      </section>
    </Layout>
  );
}

