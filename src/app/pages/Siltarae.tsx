import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, Cloud, Send, Sparkles, Wand2 } from "lucide-react";

export default function Siltarae() {
  const [worry, setWorry] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    if (!worry.trim()) return;
    setIsSent(true);
    setTimeout(() => {
      setWorry("");
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#F3FBF7' }}>
       {/* Background Animated Clouds */}
       <Cloud className="absolute top-20 left-[10%] text-white/40 w-32 h-32 animate-pulse" />
       <Cloud className="absolute bottom-40 right-[15%] text-white/40 w-24 h-24 animate-bounce-slow" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6B9F7F]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-2xl w-full relative z-10">
        <Link to="/activity" className="inline-flex items-center gap-2 text-[#6B9F7F] font-bold mb-8 hover:-translate-x-1 transition-transform">
          <ChevronLeft className="w-5 h-5" />
          루틴 목록으로
        </Link>

        <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-10 shadow-xl border border-white/20">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-[#6B9F7F]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Wand2 className="w-10 h-10 text-[#6B9F7F]" />
            </div>
            <h1 className="text-3xl font-black mb-4 text-slate-800">실타래 풀기</h1>
            <p className="text-slate-600 leading-relaxed">
              지금 머릿속을 복잡하게 만드는 걱정이 있나요? <br/>
              실타래를 풀듯 하나씩 적어서 하늘로 날려보내 보세요.
            </p>
          </div>

          {!isSent ? (
            <div className="space-y-6">
              <textarea
                value={worry}
                onChange={(e) => setWorry(e.target.value)}
                placeholder="어떤 걱정이 당신을 힘들게 하나요? 여기에 마음껏 적어보세요."
                className="w-full h-48 p-6 rounded-3xl bg-white border-2 border-[#6B9F7F]/5 focus:border-[#6B9F7F]/50 outline-none transition-all resize-none shadow-inner"
              />
              <button
                onClick={handleSend}
                disabled={!worry.trim()}
                className="w-full py-5 bg-[#6B9F7F] text-white rounded-2xl font-black text-lg shadow-lg shadow-[#6B9F7F]/30 hover:bg-[#5A8D6F] hover:-translate-y-1 transition-all disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none"
              >
                걱정 날려보내기
              </button>
            </div>
          ) : (
            <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
               <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#6B9F7F]/20 blur-xl rounded-full scale-150"></div>
                  <Send className="w-24 h-24 text-[#6B9F7F] relative animate-bounce" />
               </div>
               <h2 className="text-2xl font-black mt-8 text-slate-800">걱정이 바람에 실려 날아갔어요!</h2>
               <p className="text-slate-600 mt-4">당신의 마음이 한결 가벼워졌기를 바라요.</p>
               <button 
                  onClick={() => setIsSent(false)}
                  className="mt-10 px-8 py-3 bg-white border-2 border-[#6B9F7F]/10 text-[#6B9F7F] rounded-full font-bold hover:bg-[#6B9F7F]/5 transition-all"
               >
                  다른 걱정 풀기
               </button>
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4">
           <div className="bg-white/40 p-6 rounded-3xl border border-white/40 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                 <Sparkles className="w-5 h-5 text-[#6B9F7F]" />
                 <span className="font-bold text-xs text-slate-500">도움말</span>
              </div>
              <p className="text-xs text-slate-600 leading-tight">적는 것만으로도 뇌는 걱정을 '처리해야 할 일'에서 '처리된 일'로 인식하기 시작해요.</p>
           </div>
           <div className="bg-white/40 p-6 rounded-3xl border border-white/40 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                 <Sparkles className="w-5 h-5 text-[#6B9F7F]" />
                 <span className="font-bold text-xs text-slate-500">포인트</span>
              </div>
              <p className="text-xs text-slate-600 leading-tight">활동을 완료하면 단짝 냥이의 에너지가 +15 채워집니다!</p>
           </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
