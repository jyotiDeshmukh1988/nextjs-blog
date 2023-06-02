import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
    <Layout>
    <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/images/profile.png" // Route of the image file
        height={246} // Desired size with correct aspect ratio
        width={369} // Desired size with correct aspect ratio
        alt="Your Name"
        />
        </Layout>
    </>
  );
}