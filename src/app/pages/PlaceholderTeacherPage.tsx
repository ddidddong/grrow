import { Settings } from "lucide-react";

export default function PlaceholderTeacherPage() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="text-center">
        <div className="w-20 h-20 bg-[#6B9F7F]/10 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
          <Settings className="w-10 h-10 text-[#6B9F7F] animate-spin-slow" />
        </div>
        <h2 className="text-3xl font-black text-[#3D4F3D] mb-4">페이지 준비 중</h2>
        <p className="text-lg text-[#6B7F6B] max-w-md mx-auto font-bold">
          선생님들을 위한 더 나은 관리 기능을 준비하고 있습니다.<br/>잠시만 기다려 주세요!
        </p>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
