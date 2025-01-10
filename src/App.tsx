import SidePanel from "./components/SidePanel";
import Router from "./Pages/Router";

function App() {
    return (
        <div className="min-h-[100vh]">
            <SidePanel />
            <div className="w-[80vw] h-[100vh] min-h-[100vh] p-10 fixed right-0 top-0 z-0 overflow-auto">
                <Router />
            </div>
        </div>
    );
}

export default App;
