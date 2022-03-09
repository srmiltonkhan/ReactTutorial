export default function Text({ addEmoji }) {
  const text = "I am Javascript Programming Language";
  return <div>{addEmoji ? addEmoji(text, "💙") : text}</div>;
}
