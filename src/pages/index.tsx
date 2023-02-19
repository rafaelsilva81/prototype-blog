import Link from "next/link";

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Home({ data }: { data: { posts: Post[] } }) {
  return (
    <>
      <main className="min-h-screen p-8 text-white bg-gray-900 min-w-screen">
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-bold">Blog Prototype</h1>

          <Link
            href="/posts/new"
            className="px-4 py-2 text-lg font-bold transition-all duration-300 bg-gray-800 rounded-lg shadow-md hover:bg-blue-500"
          >
            New Post
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.posts.map((post) => (
            <Link
              key={post.id}
              className="p-4 transition-all duration-300 bg-gray-800 rounded-lg shadow-md hover:scale-105"
              href={`/posts/${post.id}`}
            >
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="mt-2 text-gray-400">{post.content}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

// server side props

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts/getPosts");
  const posts = await res.json();

  return {
    props: {
      data: posts,
    },
  };
}
