export default function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p>The water would be boilded</p>;
  } else {
    return <p>The water would be not boilded</p>;
  }
}
