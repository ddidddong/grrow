import { useState } from "react";
import { User, Calendar, TrendingUp, Settings, Download, Heart, CheckCircle2, Circle, Clock, Plus, LayoutDashboard, Target, HelpCircle, ChevronLeft, ChevronRight, X, Smile, Meh, Frown, Annoyed, HeartCircle } from "lucide-react";

export default function MyPage() {
  const stats = [
    { label: "활동일", value: "45일", change: "+5" },
    { label: "연속 기록", value: "7일", change: "최고" },
    { label: "완료 활동", value: "124회", change: "+12" },
    { label: "획득 배지", value: "12개", change: "+2" },
  ];

  const [activeTab, setActiveTab] = useState("routine"); // default to routine for testing
  const [showMoodModal, setShowMoodModal] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moodEmojis = [
    { label: "정말 좋음", emoji: "😊", color: "#6B9F7F", bg: "#E8F5E9" },
    { label: "좋음", emoji: "🙂", color: "#8FBC8F", bg: "#F1F8F4" },
    { label: "보통", emoji: "😶", color: "#8FAADC", bg: "#E3F2FD" },
    { label: "나쁨", emoji: "😟", color: "#FFB366", bg: "#FFF3E0" },
    { label: "끔찍함", emoji: "😫", color: "#FF8A80", bg: "#FFEBEE" },
  ];

  const calendarDays = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    mood: i < 22 ? moodEmojis[Math.floor(Math.random() * moodEmojis.length)] : null
  }));

  const routines = [
    { id: 1, title: "아침 감정 체크인", time: "09:00", completed: true, category: "정서" },
    { id: 2, title: "감사 일기 쓰기", time: "12:00", completed: true, category: "활동" },
    { id: 3, title: "5분 명상", time: "15:00", completed: false, category: "활동" },
    { id: 4, title: "저녁 성찰 노트", time: "21:00", completed: false, category: "정서" },
  ];

  const goals = [
    { title: "매일 감정 체크인", progress: 7, total: 7, status: "달성" },
    { title: "주 2회 상담하기", progress: 1, total: 2, status: "진행중" },
    { title: "나에게 칭찬 한마디", progress: 3, total: 5, status: "진행중" }
  ];

  return (
    <div className="p-8" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#3D4F3D' }}>마이페이지</h1>
          <p style={{ color: '#6B7F6B' }}>나의 성장 기록과 목표를 확인해요</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8" style={{ border: '1px solid rgba(107, 159, 127, 0.15)' }}>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white">
              <img src="/grrow/assets/character.png" alt="Mallangi" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1" style={{ color: '#3D4F3D' }}>이정서</h2>
              <p style={{ color: '#6B7F6B' }}>학생 · 가입일: 2026.03.08</p>
              <div className="flex gap-2 mt-3">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#B4D4C3', color: '#3D4F3D' }}>
                  레벨 8
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFE8CC', color: '#FFB366' }}>
                  성장 중
                </span>
              </div>
            </div>
            <button className="px-4 py-2 border-2 rounded-xl transition-all flex items-center gap-2" style={{ borderColor: '#6B9F7F', color: '#6B9F7F' }}>
              <Settings className="w-4 h-4" strokeWidth={1.5} />
              설정
            </button>
          </div>
          
          <div className="flex gap-2 mt-8 p-1.5 bg-[#F9F3E8] rounded-2xl w-fit overflow-x-auto max-w-full">
            {[
              { id: "dashboard", label: "내 대시보드", icon: LayoutDashboard },
              { id: "routine", label: "감정 체크인", icon: Calendar },
              { id: "goals", label: "목표 관리", icon: Target },
              { id: "settings", label: "설정", icon: Settings },
              { id: "tutorial", label: "서비스 튜토리얼", icon: HelpCircle },
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab.id ? 'bg-[#6B9F7F] text-white shadow-md' : 'text-[#8B9A8B] hover:bg-white/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'dashboard' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-[#6B9F7F]/10">
                  <div className="text-sm mb-1" style={{ color: '#6B7F6B' }}>{stat.label}</div>
                  <div className="text-2xl font-bold mb-1" style={{ color: '#3D4F3D' }}>{stat.value}</div>
                  <div className="text-xs font-medium" style={{ color: '#6B9F7F' }}>{stat.change}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#6B9F7F]/10">
                <h3 className="font-bold mb-4 flex items-center gap-2 text-[#3D4F3D]">
                  <Calendar className="w-5 h-5 text-[#6B9F7F]" />
                  최근 기록 추이
                </h3>
                <div className="space-y-4">
                  {emotionHistory.map((record, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#F9F3E8]/50">
                      <div className="w-12 h-12 rounded-xl" style={{ backgroundColor: record.color }}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-[#3D4F3D]">{record.mood}</span>
                          <span className="text-xs text-[#8B9A8B]">{record.date}</span>
                        </div>
                        <div className="w-full rounded-full h-1.5 bg-white shadow-inner">
                          <div className="h-full rounded-full bg-[#6B9F7F]" style={{ width: `${record.battery}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#6B9F7F]/10">
                <h3 className="font-bold mb-4 flex items-center gap-2 text-[#3D4F3D]">
                   <TrendingUp className="w-5 h-5 text-[#8FBC8F]" />
                   성장 분석 리포트
                </h3>
                <div className="bg-gradient-to-br from-[#6B9F7F]/5 to-[#8FBC8F]/5 p-6 rounded-[2rem] border border-[#6B9F7F]/10 h-full flex flex-col justify-between">
                   <p className="text-[#6B7F6B] leading-relaxed mb-6">
                      지난 주보다 <span className="font-bold text-[#6B9F7F]">긍정 정서가 15% 상승</span>했습니다. 
                      일상 가꾸기 활동을 통해 사회적 기술을 꾸준히 연습하고 계시네요!
                   </p>
                   <button className="w-full py-4 bg-[#6B9F7F] text-white rounded-2xl font-bold shadow-lg">상세 리포트 보기</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'routine' && (
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-[#6B9F7F]/10 animate-fade-in relative">
             <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-6">
                   <h3 className="text-3xl font-black text-[#3D4F3D]">2월</h3>
                   <div className="flex gap-2">
                      <button className="p-2 bg-[#F9F3E8] rounded-full text-[#8B9A8B] hover:text-[#6B9F7F] transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                      <button className="p-2 bg-[#F9F3E8] rounded-full text-[#8B9A8B] hover:text-[#6B9F7F] transition-colors"><ChevronRight className="w-5 h-5" /></button>
                   </div>
                </div>
                <button 
                  onClick={() => setShowMoodModal(true)}
                  className="px-6 py-3 bg-[#6B9F7F] text-white rounded-2xl font-bold text-sm shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                   <Plus className="w-5 h-5" />
                   추가하기
                </button>
             </div>

             <div className="bg-[#B4D4C3]/10 rounded-[3rem] p-8 border border-[#B4D4C3]/20">
                <div className="grid grid-cols-7 gap-4 mb-4">
                  {['일', '월', '화', '수', '목', '금', '토'].map(d => (
                    <div key={d} className="text-center text-xs font-black text-[#6B7F6B] opacity-50 uppercase tracking-widest">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-4">
                  {/* Empty cells for February start offset */}
                  <div className="aspect-square"></div>
                  <div className="aspect-square"></div>
                  <div className="aspect-square"></div>
                  {calendarDays.map((day, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-2xl flex items-center justify-center relative transition-all cursor-pointer group ${
                        day.mood ? 'bg-white shadow-sm' : 'bg-white/30 border-2 border-dashed border-[#6B9F7F]/10'
                      }`}
                    >
                      <span className="absolute top-2 left-2 text-[10px] font-bold text-[#8B9A8B]">{day.day}</span>
                      {day.mood ? (
                        <div className="text-3xl group-hover:scale-125 transition-transform drop-shadow-sm">{day.mood.emoji}</div>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6B9F7F]/20"></div>
                      )}
                    </div>
                  ))}
                </div>
             </div>

             {/* Legend */}
             <div className="mt-8 flex justify-center gap-6">
                {moodEmojis.map((m, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-lg">{m.emoji}</span>
                    <span className="text-xs font-bold text-[#8B9A8B]">{m.label}</span>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Mood Selection Modal */}
        {showMoodModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-[#3D4F3D]/20 animate-fade-in">
            <div className="bg-white rounded-[3rem] w-full max-w-md p-10 shadow-2xl relative overflow-hidden">
              <button 
                onClick={() => setShowMoodModal(false)}
                className="absolute top-8 right-8 p-2 text-[#8B9A8B] hover:text-[#3D4F3D] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-12">
                <h4 className="text-3xl font-black text-[#3D4F3D] mb-2 tracking-tight">기분이 어때요?</h4>
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#6B9F7F]">
                   <Calendar className="w-4 h-4" />
                   오늘, 4월 23일 · 15:15
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 mb-12">
                {moodEmojis.map((m, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedMood(m.label)}
                    className="flex flex-col items-center gap-4 group"
                  >
                    <div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl transition-all shadow-md group-hover:scale-110 active:scale-95 ${
                        selectedMood === m.label ? 'ring-4 ring-[#6B9F7F] ring-offset-4' : ''
                      }`}
                      style={{ backgroundColor: m.bg }}
                    >
                      {m.emoji}
                    </div>
                    <span className={`text-[10px] font-black ${selectedMood === m.label ? 'text-[#6B9F7F]' : 'text-[#8B9A8B]'}`}>
                      {m.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                 <p className="text-sm font-bold text-[#3D4F3D] px-2">조금 더 자세히 말해볼까요?</p>
                 <textarea 
                    placeholder="오늘 하루는 어땠나요?"
                    className="w-full h-32 rounded-3xl bg-[#F9F3E8] p-6 text-sm placeholder-[#8B9A8B] focus:outline-none focus:ring-2 focus:ring-[#6B9F7F]/20 resize-none translate-y-0"
                 ></textarea>
              </div>

              <button 
                onClick={() => setShowMoodModal(false)}
                className="w-full mt-8 py-5 bg-[#6B9F7F] text-white rounded-3xl font-black shadow-xl shadow-[#6B9F7F]/30 hover:bg-[#5A8D6F] transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50"
                disabled={!selectedMood}
              >
                기록 완료하기
              </button>
            </div>
          </div>
        )}

        {activeTab === 'goals' && (
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-[#6B9F7F]/10 animate-fade-in">
             <h3 className="text-2xl font-bold mb-8 text-[#3D4F3D]">나의 목표 관리</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map((goal, i) => (
                   <div key={i} className="p-6 rounded-[2rem] border border-[#6B9F7F]/10 bg-white">
                      <div className="flex justify-between mb-4">
                         <span className="font-bold text-[#3D4F3D]">{goal.title}</span>
                         <span className={`text-xs px-3 py-1 rounded-full font-bold ${goal.status === '달성' ? 'bg-[#F1F8F4] text-[#6B9F7F]' : 'bg-[#FFF8F1] text-[#FFB366]'}`}>
                            {goal.status}
                         </span>
                      </div>
                      <div className="w-full h-2 bg-[#F9F3E8] rounded-full overflow-hidden mb-2">
                         <div className="h-full bg-[#6B9F7F]" style={{ width: `${(goal.progress / goal.total) * 100}%` }}></div>
                      </div>
                      <p className="text-right text-xs font-bold text-[#8B9A8B]">{goal.progress} / {goal.total}</p>
                   </div>
                ))}
             </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-[#6B9F7F]/10 animate-fade-in">
             <h3 className="text-2xl font-bold mb-8 text-[#3D4F3D]">환경 설정</h3>
             <div className="space-y-4">
                {["프로필 정보 수정", "알림 설정", "계정 보안", "테마 변경", "학부모 공유 설정"].map((item, i) => (
                   <button key={i} className="w-full flex items-center justify-between p-6 rounded-2xl border border-[#F9F3E8] hover:bg-[#F9F3E8]/50 transition-all font-bold text-[#3D4F3D]">
                      {item}
                      <Plus className="w-5 h-5 opacity-20" />
                   </button>
                ))}
             </div>
          </div>
        )}

        {activeTab === 'tutorial' && (
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-[#6B9F7F]/10 animate-fade-in">
             <h3 className="text-2xl font-bold mb-4 text-[#3D4F3D]">서비스 가이드</h3>
             <div className="aspect-video bg-[#F9F3E8] rounded-[2rem] flex flex-col items-center justify-center border-2 border-dashed border-[#6B9F7F]/20">
                <HelpCircle className="w-16 h-16 text-[#6B9F7F]/20 mb-4" />
                <p className="text-[#8B9A8B] font-bold">서비스 입문 튜토리얼 영상을 준비 중입니다.</p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
