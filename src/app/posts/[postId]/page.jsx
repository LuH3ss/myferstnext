import { Suspense } from "react";
import Posts from "../page";
import Loading from "../loading";

async  function cargarPost(id){
  const res = await fetch(`https://jsonplaceholder.org/posts/${id}`);
  const data = await res.json();
  return data
}


 async function Post({params}) {
    // params en este caso va a tomar el valor de la ruta relativa, o sea ,del directory llamado [postId]
    const post = await cargarPost(params.postId)
  return (
    <div>
        <h3>{post.id}. {post.title}</h3>
        <p>{post.content}</p>
       <hr />
       <h2>Otras publicaciones</h2>
       <Suspense fallback={<Loading />}>
            <Posts />
       </Suspense>
    </div>
  )
}

export default Post;
