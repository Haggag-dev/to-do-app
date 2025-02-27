import { useEffect, useState } from "react";

interface Props {
  phrases: String[];
}

const TypeWriter = ({ phrases }: Props) => {
  const [phrase, setPhrase] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setDeleting] = useState(false);

  const typewriter = () => {
    if (!isDeleting && charIndex < phrases[index].length) {
      setPhrase(() => {
        const char = phrases[index][charIndex];

        const newCharIndex = charIndex + 1;
        setCharIndex(newCharIndex);

        if (newCharIndex >= phrases[index].length) setDeleting(true);

        return phrase + char;
      });
    }

    if (isDeleting && charIndex >= 0) {
      setPhrase(() => {
        setCharIndex(charIndex - 1);
        const newPhrase = phrase.slice(0, -1);
        return newPhrase;
      });
    } else if (isDeleting && index < phrases.length) {
      setDeleting(false);
      setCharIndex(0);

      const newIndex = index + 1;
      if (newIndex >= phrases.length) setIndex(0);
      else setIndex(index + 1);
    }
  };

  useEffect(() => {
    const fast = Math.random() * 80;
    const normal = Math.random() * 300;

    const atEnd = charIndex === phrases[index].length;

    const time = atEnd ? 2000 : isDeleting ? fast : normal;
    const timeoutId = setTimeout(typewriter, time);

    return () => clearTimeout(timeoutId);
  });

  return (
    <>
      {phrase}
      <p className="bg-white h-5 w-0.25 animate-text-cursor"></p>
    </>
  );
};

export default TypeWriter;
