import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";

gsap.registerPlugin(TextPlugin);
function TypingEffects({
  colour,
  staticContent = "",
  DynamicContent = "",
  yoyo = false,
  cursorStyle = "_",
  animationDelay = 0,
  repeat = 0,
  repeatDelay = 0,
  duration = 1,
}) {
  useEffect(() => {
    const text = DynamicContent;
    let cursor = gsap.to(".cursor", {
      opacity: 0,
      repeat: -1,
      delay: animationDelay,
    });
    gsap.to(".content", {
      duration: duration,
      text: text,
      repeat: repeat,
      repeatDelay: repeatDelay,
      delay: animationDelay,
      yoyo: yoyo,
    });
  }, []);

  return (
    <div>
      <span>{staticContent}</span>
      <span className={`content text-${colour}-400`}></span>
      <span className={`cursor text-${colour}-400`}>{cursorStyle}</span>
    </div>
  );
}

export default TypingEffects;
