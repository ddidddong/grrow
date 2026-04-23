import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, Heart, Brain, Target, Sparkles, Coffee, Moon, Sun, Check, X, ShieldAlert, Users, Lightbulb, Search, GraduationCap, PartyPopper, Zap, MessageCircle } from "lucide-react";

export default function Tutorial() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const questions = [
    "나는 독립적인 편이고 자기주장을 잘 한다.",
    "나는 상황에 정면으로 맞설 때 삶이 잘 풀린다고 느낀다.",
    "나는 목표를 설정하고 그 일을 추진해 나간다. 그리고 그것이 성취되기를 원한다.",
    "나는 가만히 앉아 있는 것을 좋아하지 않는다.",
    "나는 큰 일을 성취하고 영향력을 행사하기를 원한다.",
    "나는 정면 대결을 원하지는 않지만 사람들이 나를 통제하는 것도 좋아하지 않는다.",
    "대개의 경우 나는 내가 원하는 것을 잘 알고 있다.",
    "나는 일도 노는 것도 열심히 한다.",
    "나는 조용하게 혼자 있는 것을 좋아한다.",
    "나는 사회적인 활동에 주의를 쏟지 않으며 대체로 내 의견을 강하게 주장하지 않는다.",
    "나는 앞에 나서거나 다른 사람과 경쟁하는 것을 그리 좋아하지 않는다.",
    "사람들은 나를 몽상가라고 말한다.",
    "내 상상의 세계 안에서는 많은 흥미로운 일들이 벌어진다.",
    "나는 적극적이고 활동적이기보다는 조용한 성격이다.",
    "나는 아주 책임감이 강하고 헌신적이다.",
    "나는 내 의무를 다하지 못할 때 아주 기분이 나쁘다.",
    "나는 사람들이 필요할 때 그들을 위해 내가 그 자리에 있다는 것을 알아 주었으면 좋겠다.",
    "나는 그들을 위해 최선을 다할 것이다.",
    "이따금씩 나는 사람들이 나를 알아 주든 알아 주지 않든 그들을 위해 큰 희생을 한다.",
    "나는 내 자신을 제대로 돌보지 않는다."
  ];

  const enneagramTypes = [
    { type: "8", title: "도전가", icon: ShieldAlert, color: "#FF8A80", desc: "강하고 결단력 있는 리더", trait: "독립심과 통제력" },
    { type: "4", title: "예술가", icon: Lightbulb, color: "#EA80FC", desc: "독창적이고 감수성이 풍부한 개인주의자", trait: "상상력과 개성" },
    { type: "2", title: "조력자", icon: Heart, color: "#FF80AB", desc: "따뜻하고 헌신적인 사랑꾼", trait: "배려와 희생" },
    { type: "1", title: "완벽주의자", icon: GraduationCap, color: "#80D8FF", desc: "올바르고 책임감 강한 원칙주의자", trait: "성실함과 정의" },
    { type: "7", title: "낙천가", icon: PartyPopper, color: "#FFD180", desc: "밝고 즐거움을 추구하는 열정가", trait: "에너지와 긍정" }
  ];

  const getResultType = () => {
    // Simplified logic for prototype
    const yesCount = Object.values(answers).filter(v => v).length;
    if (yesCount > 15) return enneagramTypes[0]; // Type 8
    if (yesCount > 12) return enneagramTypes[1]; // Type 4
    if (yesCount > 8) return enneagramTypes[2];  // Type 2
    if (yesCount > 4) return enneagramTypes[3];  // Type 1
    return enneagramTypes[4]; // Type 7
  };

  const handleAnswer = (index: number, value: boolean) => {
    setAnswers(prev => ({ ...prev, [index]: value }));
  };

  const isSurveyComplete = Object.keys(answers).length === questions.length;

  const handleComplete = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" style={{ backgroundColor: '#FFFBF5' }}>
      {/* Background Decorative Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#6B9F7F]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="w-full max-w-3xl relative z-10">
        <div className="bg-white/70 backdrop-blur-3xl rounded-[3rem] shadow-2xl p-10 md:p-16 border border-white">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#8B9A8B]">초기 진단 ({step}/3)</h2>
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-12 h-2 rounded-full transition-all duration-500 ${s <= step ? 'bg-[#6B9F7F]' : 'bg-[#F9F3E8]'}`}
                />
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className="text-center animate-fade-in">
              <div className="relative mb-10 group">
                <div className="absolute inset-0 bg-[#6B9F7F]/20 blur-[50px] rounded-full scale-125 group-hover:scale-150 transition-all"></div>
                <img src="/assets/character.png" alt="Mallangi" className="relative z-10 w-48 h-auto mx-auto animate-bounce-slow" />
              </div>
              <h1 className="text-4xl font-bold mb-6" style={{ color: '#3D4F3D' }}>
                안녕! 나는 <span className="text-[#6B9F7F]">말랑이</span>야 🌱
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: '#6B7F6B' }}>
                네 Grrow 정원을 가꾸는 걸 도와줄게. <br />
                함께 시작하기 전에 네가 누군지 조금만 알려줄래?
              </p>
              <button
                onClick={() => setStep(2)}
                className="group bg-[#6B9F7F] text-white px-10 py-5 rounded-[2rem] font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-[#6B9F7F]/20 hover:-translate-y-1 transition-all"
              >
                진단 시작하기
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}

          {step === 2 && !showResult && (
            <div className="animate-fade-in h-[60vh] flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#B4D4C3] flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                   <h2 className="text-2xl font-bold" style={{ color: '#3D4F3D' }}>나의 성향 진단</h2>
                   <p style={{ color: '#6B7F6B' }}>나와 더 가까운 답변을 골라줘</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pr-4 mb-8 space-y-4 h-full custom-scrollbar">
                {questions.map((q, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center justify-between p-6 rounded-[2rem] bg-[#F9F3E8]/30 gap-4">
                    <p className="flex-1 text-[#3D4F3D] font-bold leading-relaxed">
                      <span className="text-[#6B9F7F] mr-2">{i + 1}.</span> {q}
                    </p>
                    <div className="flex gap-2">
                       <button
                         onClick={() => handleAnswer(i, true)}
                         className={`w-16 h-12 rounded-xl font-bold transition-all ${answers[i] === true ? 'bg-[#6B9F7F] text-white' : 'bg-white text-[#8B9A8B]'}`}
                       >YES</button>
                       <button
                         onClick={() => handleAnswer(i, false)}
                         className={`w-16 h-12 rounded-xl font-bold transition-all ${answers[i] === false ? 'bg-[#6B9F7F] text-white' : 'bg-white text-[#8B9A8B]'}`}
                       >NO</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-8 py-5 rounded-2xl font-bold border-2 border-[#F9F3E8] text-[#8B9A8B] hover:bg-[#F9F3E8]/50 transition-all"
                >이전</button>
                <button
                  onClick={() => setShowResult(true)}
                  disabled={!isSurveyComplete}
                  className="flex-1 bg-[#6B9F7F] text-white py-5 rounded-2xl font-bold shadow-xl disabled:opacity-50 transition-all"
                >결과 확인하기</button>
              </div>
            </div>
          )}

          {step === 2 && showResult && (
            <div className="animate-scale-in text-center py-10">
               <div className="w-32 h-32 mx-auto rounded-[3rem] bg-gradient-to-br from-white to-[#F9F3E8] shadow-2xl flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 blur-[50px] opacity-40" style={{ backgroundColor: getResultType().color }}></div>
                  {(() => {
                    const Icon = getResultType().icon;
                    return <Icon className="w-16 h-16 relative z-10" style={{ color: getResultType().color }} />;
                  })()}
               </div>
               <h3 className="text-[#6B7F6B] font-black uppercase tracking-[0.2em] mb-2">당신은 어떤 유형일까요?</h3>
               <h1 className="text-5xl font-black mb-6" style={{ color: '#3D4F3D' }}>
                 "에니어그램 {getResultType().type}번, <span style={{ color: getResultType().color }}>{getResultType().title}</span>"
               </h1>
               <div className="max-w-md mx-auto bg-[#F9F3E8]/50 p-6 rounded-[2rem] mb-10">
                  <p className="text-[#3D4F3D] font-bold text-lg mb-2">{getResultType().desc}</p>
                  <p className="text-[#6B7F6B]">{getResultType().trait}을 중요하게 생각하는 당신에게 딱 맞는 활동을 추천해 줄게!</p>
               </div>
               <button
                 onClick={() => setStep(3)}
                 className="bg-[#6B9F7F] text-white px-10 py-5 rounded-[2rem] font-bold shadow-xl hover:-translate-y-1 transition-all"
               >활동 확인하러 가기</button>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
               <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#FFE8CC] flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-[#FFB366]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: '#3D4F3D' }}>마음에 드는 루틴을 골라줘!</h2>
                  <p style={{ color: '#6B7F6B' }}>서영님에게 가장 필요해 보이는 루틴들이야</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  { id: "writing", title: "걱정 비우기", desc: "마음속 걱정을 글로 적어 하늘로 날려보내기", tag: "기록" },
                  { id: "meditation", title: "마음 챙김 명상", desc: "호흡에 집중하며 평온한 감정 느끼기", tag: "명상" },
                  { id: "thanks", title: "감사 일기", desc: "오늘 하루 감사했던 일 3가지 적어보기", tag: "긍정" },
                  { id: "exercise", title: "마음 챙김 운동", desc: "몸의 움직임에 집중하며 스트레스 해소", tag: "신체" },
                ].map((activity) => (
                  <label
                    key={activity.id}
                    className="flex flex-col gap-3 p-6 border-2 rounded-[2rem] cursor-pointer transition-all hover:bg-[#F9F3E8]/30 group"
                    style={{ borderColor: '#F9F3E8' }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="px-3 py-1 rounded-full bg-[#6B9F7F]/10 text-[#6B9F7F] text-[10px] font-black uppercase tracking-widest">
                        {activity.tag}
                      </div>
                      <input type="checkbox" className="w-6 h-6 accent-[#6B9F7F]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#3D4F3D]">{activity.title}</p>
                      <p className="text-xs text-[#8B9A8B] leading-relaxed mt-1">{activity.desc}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="flex gap-4">
                 <button
                  onClick={() => setShowResult(false)}
                  className="px-8 py-5 rounded-2xl font-bold border-2 border-[#F9F3E8] text-[#8B9A8B] hover:bg-[#F9F3E8]/50 transition-all"
                >
                  이전으로
                </button>
                <button
                  onClick={handleComplete}
                  className="flex-1 bg-[#6B9F7F] text-white py-5 rounded-2xl font-bold shadow-xl transition-all"
                >
                  정원 입장하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #F9F3E8;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #6B9F7F;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

