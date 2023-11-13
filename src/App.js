import "./App.css";
import { useState } from "react";

const faqs = [
  {
    title: "About the New Year holiday",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reprehenderit quaerat. Incidunt omnis, ab hic voluptas alias quam facere voluptatem.",
  },
  {
    title: "About the Navruz holiday",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reprehenderit quaerat. Incidunt omnis, ab hic voluptas alias quam facere voluptatem.",
  },
  {
    title: "About the Teachers holiday",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reprehenderit quaerat. Incidunt omnis, ab hic voluptas alias quam facere voluptatem.",
  },
];

function App() {
  return (
    <div className="App">
      <According data={faqs} />
    </div>
  );
}

const According = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordingItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordingItem>
      ))}
    </div>
  );
};

const AccordingItem = ({ title, num, curOpen, onOpen, children }) => {
  // const [isOpen, setIsopen] = useState(false);
  const isOpen = num === curOpen;
  const handleToggle = () => {
    // setIsopen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num);
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default App;
