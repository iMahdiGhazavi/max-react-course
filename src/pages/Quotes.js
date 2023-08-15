import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Mahdi", text: "Learning React is fun!" },
  { id: "q2", author: "Ali", text: "Learning React is great!" },
];

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
