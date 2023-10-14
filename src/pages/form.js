import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setBody("");
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
