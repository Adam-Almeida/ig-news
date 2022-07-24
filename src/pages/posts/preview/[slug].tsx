import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import getPrismicClient from "../../../services/prismic";
import { RichText } from "prismic-dom";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import styles from "../post.module.scss";
import { useEffect } from "react";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function PostPreview({ post }: PostPreviewProps) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.data?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className={styles.continueReading}>
            <Link href="/">
              <a href="">
                Quer continuar lendo? Inscreva-se aqui
                <AiOutlineCheckCircle />
              </a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  interface IParams extends ParsedUrlQuery {
    slug: string;
  }

  const { params } = context;
  const { slug } = params as IParams;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID("post", slug, {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 2)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      post,
    },
    redirect: 60 * 30, //30 minutos
  };
};
