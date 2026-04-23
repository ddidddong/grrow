import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Tutorial from "./pages/Tutorial";
import Home from "./pages/Home";
import Routine from "./pages/Routine";
import Activity from "./pages/Activity";
import Growth from "./pages/Growth";
import Cooperation from "./pages/Cooperation";
import CharacterCustom from "./pages/CharacterCustom";
import MyPage from "./pages/MyPage";
import Root from "./pages/Root";
import Siltarae from "./pages/Siltarae";
import MindPond from "./pages/MindPond";
import Letter from "./pages/Letter";
import SweetSong from "./pages/SweetSong";
import PlaceholderActivity from "./pages/PlaceholderActivity";

import TeacherHome from "./pages/TeacherHome";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/tutorial",
    Component: Tutorial,
  },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "teacher", Component: TeacherHome },
      { path: "routine", Component: Routine },
      { path: "activity", Component: Activity },
      { path: "activity/siltarae", Component: Siltarae },
      { path: "activity/pond", Component: MindPond },
      { path: "activity/letter", Component: Letter },
      { path: "activity/meditation", Component: SweetSong },
      { path: "activity/rainbow", Component: PlaceholderActivity },
      { path: "activity/thanks", Component: PlaceholderActivity },
      { path: "activity/eating", Component: PlaceholderActivity },
      { path: "activity/fitness", Component: PlaceholderActivity },
      { path: "growth", Component: Growth },
      { path: "cooperation", Component: Cooperation },
      { path: "cooperation/character", Component: CharacterCustom },
      { path: "mypage", Component: MyPage },
    ],
  },
]);
