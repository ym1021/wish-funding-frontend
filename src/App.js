import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/main/example")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) =>
        console.error("There was a problem with your fetch operation:", error)
      );
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default App;
