import { useState } from "react";
import { useNavigate } from "react-router";
import { Heart, Mail, Lock, User, ArrowRight } from "lucide-react";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/tutorial");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" style={{ backgroundColor: '#FFFBF5' }}>
      {/* Background Decorative Blurs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#6B9F7F]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFD4A8]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 bg-white/60 backdrop-blur-2xl rounded-[3rem] border border-white shadow-2xl overflow-hidden relative z-10">
        
        {/* Left Side: Branding & Character */}
        <div className="p-12 md:p-20 flex flex-col items-center justify-center text-center bg-[#6B9F7F]/5">
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-[#6B9F7F]/20 blur-[60px] rounded-full scale-150"></div>
            <img 
              src="/assets/character.png" 
              alt="Mind Buddy" 
              className="relative z-10 w-64 h-auto drop-shadow-2xl animate-float"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
          </div>
          <img src="/assets/logo.png" alt="Grrow" className="h-16 w-auto mb-4" />
          <p className="text-lg leading-relaxed max-w-[280px]" style={{ color: '#6B7F6B' }}>
            나만의 작은 Grrow 정원을 <br />
            말랑이와 함께 가꾸어 보아요
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#3D4F3D' }}>
              {isSignup ? "환영합니다!" : "다시 만나 반가워요!"}
            </h2>
            <p style={{ color: '#6B7F6B' }}>
              {isSignup ? "기본 정보를 입력하고 시작해볼까요?" : "로그인하여 Grrow 기록을 이어가세요"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && (
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B9A8B] group-focus-within:text-[#6B9F7F] transition-colors" />
                <input
                  type="text"
                  placeholder="이름"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#F9F3E8]/50 border-2 border-transparent focus:border-[#6B9F7F] focus:bg-white transition-all outline-none"
                />
              </div>
            )}

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B9A8B] group-focus-within:text-[#6B9F7F] transition-colors" />
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#F9F3E8]/50 border-2 border-transparent focus:border-[#6B9F7F] focus:bg-white transition-all outline-none"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B9A8B] group-focus-within:text-[#6B9F7F] transition-colors" />
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#F9F3E8]/50 border-2 border-transparent focus:border-[#6B9F7F] focus:bg-white transition-all outline-none"
              />
            </div>

            {!isSignup && (
              <div className="flex justify-end">
                <button type="button" className="text-sm font-medium hover:underline" style={{ color: '#6B9F7F' }}>
                  비밀번호를 잊으셨나요?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-[#6B9F7F] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#6B9F7F]/20 transition-all hover:-translate-y-1"
            >
              {isSignup ? "가입하기" : "로그인"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setIsSignup(!isSignup)} 
              className="text-sm font-bold" 
              style={{ color: '#6B7F6B' }}
            >
              {isSignup ? "이미 계정이 있으신가요? " : "처음이신가요? "}
              <span style={{ color: '#6B9F7F' }}>{isSignup ? "로그인하기" : "회원가입하기"}</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </div>
  );
}

