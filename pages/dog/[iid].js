import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import { useRouter } from 'next/router';

export default function DogProfile({ data }) {
  const router = useRouter();
  const { iid } = router.query;

  return (
    <Layout>
      <Head>
        <title>Image {iid}</title>
      </Head>
      <h1>Slug {iid}</h1>
      <img
        src={`https://i.imgur.com/${iid}.jpeg`}
      />
    </Layout>
  );
}
