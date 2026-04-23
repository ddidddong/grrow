import { Calendar, CheckCircle2, Circle, Clock, TrendingUp, Trophy, Zap, Plus } from "lucide-react";

export default function Routine() {
  const routines = [
    {
      id: 1,
      title: "아침 감정 체크인",
      time: "09:00",
      completed: true,
      streak: 7,
      category: "정서"
    },
    {
      id: 2,
      title: "감사 일기 쓰기",
      time: "12:00",
      completed: true,
      streak: 5,
      category: "활동"
    },
    {
      id: 3,
      title: "5분 명상",
      time: "15:00",
      completed: false,
      streak: 12,
      category: "활동"
    },
    {
      id: 4,
      title: "저녁 성찰 노트",
      time: "21:00",
      completed: false,
      streak: 3,
      category: "정서"
    },
  ];

  const weeklyProgress = [
    { day: "월", completed: 4, total: 4 },
    { day: "화", completed: 4, total: 4 },
    { day: "수", completed: 3, total: 4 },
    { day: "목", completed: 4, total: 4 },
    { day: "금", completed: 2, total: 4 },
    { day: "토", completed: 0, total: 4 },
    { day: "일", completed: 0, total: 4 },
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#3D4F3D' }}>루틴 마스터</h1>
          <p className="text-lg" style={{ color: '#6B7F6B' }}>작은 습관이 모여 단단한 마음을 만들어요</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: <Zap className="w-6 h-6" />, label: "완료한 루틴", value: "2/4", color: "#6B9F7F", bg: "#F0F7F2" },
            { icon: <TrendingUp className="w-6 h-6" />, label: "현재 스트릭", value: "12일째", color: "#8FBC8F", bg: "#F1F8F4" },
            { icon: <Trophy className="w-6 h-6" />, label: "이번 주 달성률", value: "85%", color: "#FFB366", bg: "#FFF3E0" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-[#6B9F7F]/10 shadow-sm flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner" style={{ backgroundColor: stat.bg, color: stat.color }}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-bold opacity-60 mb-1" style={{ color: '#3D4F3D' }}>{stat.label}</p>
                <p className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Weekly Progress Sidebar */}
           <div className="bg-white rounded-[2.5rem] p-8 border border-[#6B9F7F]/10 shadow-sm h-fit">
            <h3 className="font-bold text-lg mb-8 flex items-center gap-2" style={{ color: '#3D4F3D' }}>
              <Calendar className="w-5 h-5 text-[#6B9F7F]" />
              주간 리포트
            </h3>
            <div className="space-y-6">
              {weeklyProgress.map((day, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-8 text-sm font-bold" style={{ color: '#8B9A8B' }}>{day.day}</span>
                  <div className="flex-1 h-3 bg-[#F9F3E8] rounded-full overflow-hidden flex">
                    <div 
                      className="h-full bg-[#6B9F7F] rounded-full transition-all duration-1000" 
                      style={{ width: `${(day.completed / day.total) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold" style={{ color: '#6B9F7F' }}>{day.completed}/{day.total}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Routine List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-2 px-4">
              <h3 className="font-bold text-lg" style={{ color: '#3D4F3D' }}>나의 데일리 루틴</h3>
              <button className="text-[#6B9F7F] font-bold text-sm flex items-center gap-1 hover:opacity-70 transition-all">
                <Plus className="w-4 h-4" />
                루틴 추가하기
              </button>
            </div>
            {routines.map((routine) => (
              <div
                key={routine.id}
                className={`group p-6 rounded-[2rem] border transition-all duration-300 ${
                  routine.completed 
                  ? 'bg-white/50 opacity-60 border-[#B4D4C3]' 
                  : 'bg-white border-[#6B9F7F]/10 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      routine.completed ? 'bg-[#6B9F7F] text-white' : 'bg-[#F9F3E8] text-[#8B9A8B] group-hover:bg-[#6B9F7F]/10 group-hover:text-[#6B9F7F]'
                    }`}>
                      {routine.completed ? <CheckCircle2 className="w-7 h-7" /> : <Circle className="w-7 h-7" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{routine.category}</span>
                        <div className="w-1 h-1 rounded-full bg-black/10" />
                        <span className="text-sm font-bold" style={{ color: '#8B9A8B' }}>{routine.time}</span>
                      </div>
                      <h4 className={`text-lg font-bold transition-all ${routine.completed ? 'line-through opacity-50' : ''}`} style={{ color: '#3D4F3D' }}>
                        {routine.title}
                      </h4>
                    </div>
                  </div>
                  {!routine.completed && (
                    <button className="px-6 py-3 bg-[#6B9F7F] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all">
                      시작하기
                    </button>
                  )}
                  {routine.completed && (
                    <div className="text-[#6B9F7F] font-black text-sm pr-4">
                      +100 exp
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

