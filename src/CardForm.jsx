import React, { useState } from "react";

const CardForm = React.memo(({ onSubmit }) => {
  console.log("--- Рендер CardForm ---");

  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!front.trim() || !back.trim()) return;

    onSubmit(front, back);

    setFront("");
    setBack("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Лицевая сторона"
        value={front}
        onChange={(e) => setFront(e.target.value)}
      />
      <input
        type="text"
        placeholder="Оборотная сторона"
        value={back}
        onChange={(e) => setBack(e.target.value)}
      />
      <button type="submit">Добавить карточку</button>
    </form>
  );
});

export default CardForm;
