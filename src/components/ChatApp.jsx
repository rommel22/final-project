import send from "../assets/send.png";
import { useEffect, useRef } from "react";

export default function ChatApp({ saveData, setSaveData, selectedRoom }) {
  function generateRandomText(numParagraphs, numSentencesPerParagraph) {
    const words = [
      "lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
      "sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua",
    ];
    const paragraphs = [];

    for (let p = 0; p < numParagraphs; p++) {
      const sentences = [];

      for (let i = 0; i < numSentencesPerParagraph; i++) {
        const numWords = Math.floor(Math.random() * 10) + 5;
        const sentenceWords = [];

        for (let j = 0; j < numWords; j++) {
          const randomIndex = Math.floor(Math.random() * words.length);
          sentenceWords.push(words[randomIndex]);
        }

        const sentence = sentenceWords.join(" ") + ".";
        sentences.push(sentence.charAt(0).toUpperCase() + sentence.slice(1));
      }

      paragraphs.push(sentences.join(" "));
    }

    return paragraphs.join("\n\n");
  }

  const randomText = generateRandomText(Math.random(), Math.random());
  const index = selectedRoom.roomId - 1;
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  useEffect(() => {
    localStorage.setItem("chatData", JSON.stringify(saveData));
  }, [saveData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements.input;
    const newMessage = {
      id: Math.random(),
      message: input.value,
      isSender: true,
      created_at: showTime,
      sender: "user",
    };
    const botMessage = {
      id: Math.random(),
      message: randomText,
      isSender: false,
      created_at: showTime,
      sender: "bot",
    };
    const newState = saveData.map((data) => {
      if (data.id === selectedRoom.roomId && data.chat.id != 0) {
        return {
          ...data,
          chat: [...data.chat, newMessage, botMessage],
        };
      }
      return data;
    });
    setSaveData(newState);
    input.value = "";
  };
  const chatContainer = useRef(null);
  useEffect(() => {
    const node = chatContainer.current;
    if (node) {
      node.scrollTop = node.scrollHeight - node.clientHeight;
    }
  }, [saveData]);

  console.log(saveData);

  return (
    <div className="chat-app">
      <div className="chat-log" ref={chatContainer}>
        {saveData[index].chat?.map((data, i) => (
          <div key={i} className={`${data.sender}`}>
            <div className={`message ${data.sender}`}>{data.message}</div>
            <p>{data.created_at}</p>
          </div>
        ))}
      </div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="chat-input">
          <input type="text" name="input" placeholder="Type a message" />
          <button type="submit">
            <div className="image-container">
              <img src={send} alt="" />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
