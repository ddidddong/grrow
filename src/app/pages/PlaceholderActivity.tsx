import { Link, useLocation } from "react-router";
import { ChevronLeft, Construction } from "lucide-react";

export default function PlaceholderActivity() {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  
  const titles: Record<string, string> = {
    rainbow: "무지개 일기",
    thanks: "행복 꾹꾹이",
    eating: "Grrow 식탁",
    fitness: "Grrow 피트니스"
  };

  const title = titles[path || ""] || "준비 중인 활동";

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-[#F9F3E8]">
      <div className="max-w-md w-full text-center">
        <Link to="/activity" className="inline-flex items-center gap-2 text-[#6B9F7F] font-bold mb-8 hover:-translate-x-1 transition-transform">
          <ChevronLeft className="w-5 h-5" />
          루틴 목록으로
        </Link>
        
        <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-[#6B9F7F]/10">
          <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Construction className="w-10 h-10 text-orange-400" />
          </div>
          <h1 className="text-2xl font-black mb-4 text-slate-800">{title}</h1>
          <p className="text-slate-600 leading-relaxed mb-8">
            현재 '{title}' 기능이 준비 중입니다. <br/>
            조금만 기다려주시면 멋진 모습으로 찾아올게요!
          </p>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#6B9F7F] animate-progress" style={{ width: '60%' }}></div>
          </div>
          <p className="text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-widest">Construction in Progress</p>
        </div>
      </div>
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress {
          animation: progress 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
