import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      body: body,
      userId: 1,
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        navigate("/posts");
      } else {
        console.error("Ошибка при создании поста");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса на сервер: ", error);
    }
  };

  return (
    <div>
      <h1>Создать новый пост</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Заголовок:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Текст:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <button type="submit">Создать пост</button>
      </form>
    </div>
  );
}

export default CreatePost;
