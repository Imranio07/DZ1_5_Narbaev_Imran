import React, { useEffect, useState } from "react";

function Posts() {
  const [dataPosts, setDataPosts] = useState([]);

useEffect(() => {
  fetch("https://dummyjson.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setDataPosts(data);

    })
    .catch((error) => console.error(error));
}, []);

  return (
    <div>
      <h1>Список постов</h1>
      <ul>
          {dataPosts.posts?.map((post, index) => (
          <li key={index}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
