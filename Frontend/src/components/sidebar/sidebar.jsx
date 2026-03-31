import QuickQuestions from "./QuickQuestions";
import TipCard from "./TipCard";

export default function Sidebar({ onAsk }) {
  return (
    <>
      <div className="sidebar-title">✦ Quick Help</div>
      <QuickQuestions onAsk={onAsk} />
      <TipCard />
    </>
  );
}