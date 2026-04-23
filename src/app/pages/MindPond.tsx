import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, BookOpen, Sparkles } from "lucide-react";

export default function MindPond() {
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-[#F0FFF4]">
      <div className="max-w-2xl w-full text-center">
        <Link to="/activity" className="text-green-600 font-bold mb-8 flex items-center gap-2"><ChevronLeft /> 루틴 목록</Link>
        <div className="bg-white/80 p-12 rounded-[3.5rem] shadow-2xl border border-white/40">
          <BookOpen className="w-16 h-16 text-green-500 mx-auto mb-8" />
          <h1 className="text-3xl font-black mb-4">Grrow 연못</h1>
          <p className="text-slate-600 mb-8">오늘 하루 Grrow 연못의 물결을 적어보세요.</p>
          {!isSent ? (
            <div className="space-y-6">
              <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full h-64 p-8 rounded-[2.5rem] bg-white border-2 border-green-50 focus:border-green-300 outline-none resize-none" placeholder="차분하게 떠오르는 생각을 적어보세요." />
              <button onClick={() => setIsSent(true)} disabled={!text.trim()} className="w-full py-6 bg-green-400 text-white rounded-[2rem] font-black text-xl hover:bg-green-500">연못에 띄우기</button>
            </div>
          ) : (
            <div className="py-12">
              <Sparkles className="w-24 h-24 text-green-400 mx-auto mb-6" />
              <h2 className="text-2xl font-black">연못에 잘 전달되었어요.</h2>
              <button onClick={() => setIsSent(false)} className="mt-8 text-green-600 font-bold underline">다른 생각 띄우기</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
