import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, Gift, Heart, Sparkle } from "lucide-react";

export default function Letter() {
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-[#FFF0F5]">
      <div className="max-w-2xl w-full text-center">
        <Link to="/activity" className="text-pink-600 font-bold mb-8 flex items-center gap-2"><ChevronLeft /> 루틴 목록</Link>
        <div className="bg-white/80 p-12 rounded-[3.5rem] shadow-2xl border border-white/40">
          <Heart className="w-16 h-16 text-pink-400 mx-auto mb-8" />
          <h1 className="text-3xl font-black mb-4">유리병 편지</h1>
          <p className="text-slate-600 mb-8">나에게, 혹은 소중한 사람에게 편지를 남겨보세요.</p>
          {!isSent ? (
            <div className="space-y-6">
              <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full h-64 p-8 rounded-[2.5rem] bg-white border-2 border-pink-50 focus:border-pink-300 outline-none resize-none" placeholder="따뜻한 마음을 적어주세요." />
              <button onClick={() => setIsSent(true)} disabled={!text.trim()} className="w-full py-6 bg-pink-400 text-white rounded-[2rem] font-black text-xl hover:bg-pink-500">편지병에 담기</button>
            </div>
          ) : (
            <div className="py-12">
              <Gift className="w-24 h-24 text-pink-400 mx-auto mb-6" />
              <h2 className="text-2xl font-black">편지가 바다로 떠났어요!</h2>
              <button onClick={() => setIsSent(false)} className="mt-8 text-pink-600 font-bold underline">다른 편지 쓰기</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
