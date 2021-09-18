import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Head from 'next/head'
import { getPostBySlug, getAllPosts } from "../../../lib/api"
import markdownToHtml from "../../../lib/markdownToHtml"

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <article className="mb-32">
        <Head>
          <title>
            {post.title} | Next.js Blog Example with markdown
          </title>
        </Head>
        <div className="max-w-2xl mx-auto">
        <div
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}

export async function getStaticProps({ params }) {
  console.log("getStaticProps run")
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  console.log("getStaticPaths run")
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
