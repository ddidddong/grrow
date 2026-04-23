import { useState } from "react";
import { Brain, Users, Target, Heart, BookOpen, CheckCircle, ChevronDown, Calendar as CalendarIcon, Filter } from "lucide-react";

export default function Growth() {
  const competencies = [
    {
      icon: Brain,
      title: "자기인식",
      description: "나의 감정과 생각을 이해해요",
      color: "#6B9F7F",
      bg: "#E8F5E9",
      progress: 65,
      lessons: 12,
      completed: 8,
    },
    {
      icon: Users,
      title: "소통·협력",
      description: "다른 사람과 잘 소통하고 협력해요",
      color: "#8FBC8F",
      bg: "#F1F8F4",
      progress: 45,
      lessons: 10,
      completed: 4,
    },
    {
      icon: Target,
      title: "책임",
      description: "스스로 선택하고 책임져요",
      color: "#A5D6A7",
      bg: "#E8F5E9",
      progress: 80,
      lessons: 8,
      completed: 6,
    },
    {
      icon: Heart,
      title: "Grrow 돌봄",
      description: "나와 타인의 마음을 돌봐요",
      color: "#FFB366",
      bg: "#FFF3E0",
      progress: 55,
      lessons: 14,
      completed: 7,
    },
  ];

  const [gradeGroup, setGradeGroup] = useState("3-4학년군");
  const [grade, setGrade] = useState("4학년");
  const [viewMode, setViewMode] = useState("curriculum"); // curriculum or monthly

  const curriculum = [
    { session: 1, title: "내 마음의 신호등 알아보기", competency: "자기인식", tag: "감정 인식", completed: true },
    { session: 2, title: "나의 강점 보물 상자 찾기", competency: "자기인식", tag: "자기 긍정", completed: true },
    { session: 3, title: "친구가 속상할 때 어떻게 할까?", competency: "소통·협력", tag: "공감", completed: true },
    { session: 4, title: "우리 반 약속, 나부터 실천해요", competency: "책임", tag: "규칙 준수", completed: false },
    { session: 5, title: "화가 나는 마음 달래기", competency: "Grrow 돌봄", tag: "정서 조절", completed: false },
    { session: 6, title: "미래의 나에게 응원 편지 쓰기", competency: "Grrow 돌봄", tag: "자기 격려", completed: false },
  ];

  const recentLessons = curriculum.filter(c => c.completed).slice(-2);

  return (
    <div className="p-8" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2" style={{ color: '#3D4F3D' }}>Grrow 클래스</h1>
            <p className="text-lg" style={{ color: '#6B7F6B' }}>2022 개정 교육과정 기반 사회정서학습(SEL) 프로그램</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Filters */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#6B9F7F]/10 shadow-sm">
              <Filter className="w-4 h-4 text-[#6B9F7F]" />
              <select 
                value={gradeGroup} 
                onChange={(e) => setGradeGroup(e.target.value)}
                className="bg-transparent border-none text-sm font-bold text-[#3D4F3D] outline-none cursor-pointer"
              >
                <option>1-2학년군</option>
                <option>3-4학년군</option>
                <option>5-6학년군</option>
              </select>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#6B9F7F]/10 shadow-sm">
              <select 
                value={grade} 
                onChange={(e) => setGrade(e.target.value)}
                className="bg-transparent border-none text-sm font-bold text-[#3D4F3D] outline-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6].map(g => <option key={g}>{g}학년</option>)}
              </select>
            </div>
            <div className="flex rounded-xl overflow-hidden border border-[#6B9F7F]/10 shadow-sm">
              <button 
                onClick={() => setViewMode("curriculum")}
                className={`px-4 py-2 text-sm font-bold transition-all ${viewMode === 'curriculum' ? 'bg-[#6B9F7F] text-white' : 'bg-white text-[#8B9A8B]'}`}
              >
                커리큘럼 보기
              </button>
              <button 
                onClick={() => setViewMode("monthly")}
                className={`px-4 py-2 text-sm font-bold transition-all ${viewMode === 'monthly' ? 'bg-[#6B9F7F] text-white' : 'bg-white text-[#8B9A8B]'}`}
              >
                월별 보기
              </button>
            </div>
          </div>
        </div>

        {/* Progress Hero Section */}
        <div className="mb-12 bg-white rounded-[2.5rem] p-10 shadow-sm border border-[#6B9F7F]/10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6B9F7F]/10 text-[#6B9F7F] text-sm font-bold mb-6">
              📊 전체 학습 진척도
            </div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#3D4F3D' }}>
              서영님은 현재 교육 과정의 <br />
              <span className="text-[#6B9F7F]">57%를 완료하셨습니다.</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-bold">
                <span style={{ color: '#6B7F6B' }}>총 44차시 중 25차시 완료</span>
                <span style={{ color: '#6B9F7F' }}>57%</span>
              </div>
              <div className="w-full h-6 bg-[#F9F3E8] rounded-full overflow-hidden shadow-inner p-1">
                <div 
                  className="h-full bg-gradient-to-r from-[#6B9F7F] to-[#8FBC8F] rounded-full transition-all duration-1000 flex items-center justify-end px-3" 
                  style={{ width: '57%' }}
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {competencies.map((comp, i) => {
            const Icon = comp.icon;

            return (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: '1px solid rgba(107, 159, 127, 0.15)' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: comp.bg }}>
                    <Icon className="w-7 h-7" style={{ color: comp.color }} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1" style={{ color: '#3D4F3D' }}>{comp.title}</h3>
                    <p className="text-sm" style={{ color: '#6B7F6B' }}>{comp.description}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-2">
                    <span style={{ color: '#6B7F6B' }}>진행률</span>
                    <span className="font-semibold" style={{ color: '#3D4F3D' }}>{comp.progress}%</span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{ backgroundColor: '#F9F3E8' }}>
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${comp.progress}%`,
                        backgroundColor: comp.color
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: '#6B7F6B' }}>
                    {comp.lessons}개 중 {comp.completed}개 완료
                  </span>
                  <button className="px-4 py-2 rounded-xl transition-all text-sm font-medium" style={{ backgroundColor: comp.bg, color: comp.color }}>
                    계속하기
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Curriculum List */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-[#6B9F7F]/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: '#3D4F3D' }}>
              <BookOpen className="w-6 h-6 text-[#6B9F7F]" />
              {viewMode === 'curriculum' ? '사회 정서 교육 프로그램 커리큘럼' : '4월 성장 캘린더'}
            </h3>
            {viewMode === 'monthly' && (
              <div className="flex items-center gap-2 text-[#6B9F7F] font-bold">
                <ChevronDown className="w-4 h-4 rotate-90" />
                <span>4월</span>
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </div>
            )}
          </div>

          <div className="space-y-4">
            {curriculum.map((item, i) => (
              <div 
                key={i} 
                className={`flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-[2rem] border transition-all ${
                  item.completed ? 'bg-[#F9F3E8]/50 border-[#F9F3E8]' : 'bg-white border-[#6B9F7F]/10 hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-lg ${
                  item.completed ? 'bg-[#6B9F7F] text-white' : 'bg-[#F9F3E8] text-[#8B9A8B]'
                }`}>
                  {item.session}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#6B9F7F]">{item.competency}</span>
                    <div className="w-1 h-1 rounded-full bg-[#6B9F7F]/20" />
                    <span className="text-xs font-bold text-[#8B9A8B]">{item.tag}</span>
                  </div>
                  <h4 className="text-lg font-bold" style={{ color: '#3D4F3D' }}>{item.title}</h4>
                </div>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-[#F9F3E8] rounded-full overflow-hidden">
                        <div className="h-full bg-[#6B9F7F]" style={{ width: item.completed ? '100%' : '0%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-[#8B9A8B]">{item.completed ? '완료' : '대기'}</span>
                   </div>
                   <button 
                    disabled={item.completed}
                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                      item.completed 
                      ? 'bg-[#B4D4C3] text-white cursor-default' 
                      : 'bg-[#6B9F7F] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                   >
                    {item.completed ? '학습 완료' : '학습 시작'}
                   </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-10 py-5 rounded-2xl border-2 border-dashed border-[#6B9F7F]/20 text-[#6B9F7F] font-bold hover:bg-[#6B9F7F]/5 transition-all">
            + 다음 차시 교육 로드하기
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s ease-in-out infinite;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
