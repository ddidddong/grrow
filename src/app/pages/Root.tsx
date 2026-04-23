import { Outlet, Link, useLocation } from "react-router";
import { 
  Home as HomeIcon, Heart, TrendingUp, Users, User, Sparkles, 
  LayoutDashboard, ClipboardList, MessageCircle, Stethoscope, 
  BarChart3, UserCheck, Settings, GraduationCap, ArrowLeftRight
} from "lucide-react";
import { useState } from "react";

export default function Root() {
  const location = useLocation();
  const [userType, setUserType] = useState<"student" | "teacher">("student");

  const studentNavItems = [
    { path: "/", icon: HomeIcon, label: "홈" },
    { path: "/activity", icon: Heart, label: "Grrow 루틴" },
    { path: "/growth", icon: TrendingUp, label: "Grrow 클래스" },
    { path: "/cooperation", icon: Users, label: "Grrow 플레이" },
    { path: "/mypage", icon: User, label: "마이페이지" },
  ];

  const teacherNavItems = [
    { 
      group: "핵심 메뉴",
      items: [
        { path: "/teacher", icon: LayoutDashboard, label: "Grrow Admin 홈" },
        { path: "/tutorial", icon: GraduationCap, label: "온보딩" },
      ]
    },
    { 
      group: "SEL 교육 서비스",
      items: [
        { path: "/teacher/sel-program", icon: ClipboardList, label: "SEL 교육 프로그램 관리" },
        { path: "/teacher/ai-chat", icon: MessageCircle, label: "AI 챗봇" },
        { path: "/teacher/counseling", icon: Heart, label: "Grrow 상담 & Wee 클래스 연계" },
        { path: "/teacher/screening", icon: Stethoscope, label: "교사 정서 검진 서비스" },
      ]
    },
    { 
      group: "내 학급 대시보드",
      items: [
        { path: "/teacher/student-status", icon: UserCheck, label: "학생별 활동 현황" },
        { path: "/teacher/class-dashboard", icon: BarChart3, label: "우리반 대시보드" },
      ]
    },
    { 
      group: "설정",
      items: [
        { path: "/mypage", icon: Settings, label: "마이페이지 (설정)" },
      ]
    }
  ];

  const currentNavItems = userType === "student" ? studentNavItems : teacherNavItems;

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#FFFBF5' }}>
      {/* Sidebar */}
      <aside className="w-72 bg-white/80 backdrop-blur-xl flex flex-col border-r border-[#6B9F7F]/10 z-20">
        <div className="p-8">
          <div className="mb-2">
            <Link to="/" className="flex items-center">
              <img src="/grrow/assets/logo_gr.png" alt="Grrow" className="h-10 w-auto" />
            </Link>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1 px-1" style={{ color: '#8B9A8B' }}>
              {userType === 'student' ? '정서 관리 플랫폼' : '교육용 관리 도구'}
            </p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 overflow-y-auto custom-scrollbar">
          <ul className="space-y-6">
            {userType === 'student' ? (
              <div className="space-y-1.5">
                {studentNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                          isActive
                            ? "shadow-lg translate-x-1"
                            : "hover:bg-[#6B9F7F]/5"
                        }`}
                        style={
                          isActive
                            ? { backgroundColor: '#6B9F7F', color: '#FFFFFF', boxShadow: '0 10px 15px -3px #6B9F7F40' }
                            : { color: '#6B7F6B' }
                        }
                      >
                        <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} strokeWidth={isActive ? 2.5 : 2} />
                        <span className={`font-bold transition-all ${isActive ? 'translate-x-1' : ''}`}>{item.label}</span>
                        {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white opacity-50" />}
                      </Link>
                    </li>
                  );
                })}
              </div>
            ) : (
              teacherNavItems.map((group, idx) => (
                <div key={idx} className="space-y-1">
                   <h3 className="px-5 text-[10px] font-black text-[#8B9A8B] uppercase tracking-widest mb-2 mt-4 first:mt-0">{group.group}</h3>
                   {group.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;

                      return (
                        <li key={item.path} className="list-none">
                          <Link
                            to={item.path}
                            className={`flex items-center gap-4 px-5 py-3 rounded-2xl transition-all duration-300 group ${
                              isActive
                                ? "shadow-lg translate-x-1"
                                : "hover:bg-[#B4D4C3]/10"
                            }`}
                            style={
                              isActive
                                ? { backgroundColor: '#B4D4C3', color: '#FFFFFF', boxShadow: '0 10px 15px -3px #B4D4C340' }
                                : { color: '#6B7F6B' }
                            }
                          >
                            <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                            <span className={`font-bold text-sm transition-all ${isActive ? 'translate-x-1' : ''}`}>{item.label}</span>
                          </Link>
                        </li>
                      );
                   })}
                </div>
              ))
            )}
            
            {/* Admin Shortcut for Student Mode */}
            {userType === 'student' && (
              <li className="pt-4 mt-4 border-t border-[#6B9F7F]/10 list-none">
                <button
                  onClick={() => setUserType('teacher')}
                  className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group bg-[#6B9F7F]/5 hover:bg-[#6B9F7F]/10 text-[#6B7F6B]"
                >
                  <LayoutDashboard className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-bold text-[13px] leading-tight text-left">Grrow Admin - <br/>교사용 전문 관리 서비스</span>
                </button>
              </li>
            )}
            
            {/* Student Shortcut for Teacher Mode */}
            {userType === 'teacher' && (
              <li className="pt-4 mt-4 border-t border-[#6B9F7F]/10 list-none">
                <button
                  onClick={() => setUserType('student')}
                  className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group bg-[#6B9F7F]/5 hover:bg-[#6B9F7F]/10 text-[#6B7F6B]"
                >
                  <User className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-bold text-[13px] leading-tight text-left">학생 화면으로 돌아가기</span>
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* User Switcher Toggle */}
        <div className="p-4 m-4 bg-[#F9F3E8] rounded-[2rem] border border-[#6B9F7F]/5">
           <button 
              onClick={() => setUserType(userType === 'student' ? 'teacher' : 'student')}
              className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group"
           >
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full overflow-hidden bg-[#6B9F7F]/10 flex items-center justify-center">
                    {userType === 'student' ? (
                       <img src="/grrow/assets/character.png" alt="Mallangi" className="w-8 h-8 object-contain" />
                    ) : (
                       <User className="w-6 h-6 text-[#6B9F7F]" />
                    )}
                 </div>
                 <div className="text-left">
                    <p className="text-xs font-black text-[#3D4F3D]">현재 접속 중</p>
                    <p className="text-sm font-bold text-[#6B9F7F]">{userType === 'student' ? '이정서 학생' : '이마음 선생님'}</p>
                 </div>
              </div>
              <ArrowLeftRight className="w-4 h-4 text-[#8B9A8B] group-hover:rotate-180 transition-transform duration-500" />
           </button>
           
           {userType === 'student' && (
              <div className="mt-4 px-2">
                 <div className="flex justify-between text-[10px] font-black text-[#8B9A8B] mb-1">
                    <span>Lv.12 성장 중</span>
                    <span>65%</span>
                 </div>
                 <div className="w-full h-1 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-[#6B9F7F]" style={{ width: '65%' }}></div>
                 </div>
              </div>
           )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto relative">
        {/* Background Decorative Blur */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#6B9F7F]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#FFD4A8]/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <Outlet />
      </main>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #6B9F7F20;
          border-radius: 10px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #6B9F7F40;
        }
      `}</style>
    </div>
  );
}


