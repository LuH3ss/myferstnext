import PostCard from "@/components/PostCard";

async function cargarPosts() {
  const res = await fetch("https://jsonplaceholder.org/posts");
  const data = await res.json();
  await new Promise((res) => setTimeout(res, 5000))
  return data;
}
// esto seria un RSC o React Server Component
export default async function Posts() {
  const posts = await cargarPosts();

  return (
    <>
      {posts.map(
        (post) => (
          //     <div key={post.id}>
          //     <h3>{post.id}. {post.title}</h3>
          //     <p>{post.content}</p>
          // </div>
          <PostCard post={post} key={post.id} />
        )
        // Si deseo integrar funcionalidad del cliente como un boton deberia crear un componente aparte y dejar en el componente padre solo la carga del BE
      )}
    </>
  );
}
