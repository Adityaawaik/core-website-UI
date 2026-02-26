import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="full-content">
      <div className="sidebar-content flex justify-between bg-gray-100">
        <SideBar />

        {/* Desktop layout */}
        <div className="header-main-content w-full mr-2 max-[950px]:hidden">
          <Header />
          <Content />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="bg-gray-100 min-[951px]:hidden">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
