import { NavLink } from "react-router";
import {
    FaChartBar,
    FaDollarSign,
    FaMoneyBillWave,
    FaCalendarAlt,
} from "react-icons/fa";

export default function SidePanel() {
    return (
        <div className="w-[20vw] h-[100vh] min-h-[100vh] shadow-2xl p-6 fixed">
            <NavLink to="/" className="flex items-center justify-start mb-8">
                <div className="flex items-center justify-center text-2xl text-slate-100 rounded-full w-10 h-10 bg-emerald-400">
                    F
                </div>
                <span className="text-xl text-slate-800 ml-3">FIRE</span>
            </NavLink>

            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    `${
                        isActive
                            ? "bg-emerald-300 hover:bg-emerald-300 text-slate-800"
                            : ""
                    } flex items-center text-slate-800 py-3 px-4 mb-1 hover:bg-emerald-200 hover:text-slate-800 rounded-lg`
                }
            >
                <FaChartBar className="mr-2" />
                Dashboard
            </NavLink>
            <NavLink
                to="/analysis"
                className={({ isActive }) =>
                    `${
                        isActive
                            ? "bg-emerald-300 hover:bg-emerald-300 text-slate-800"
                            : ""
                    } flex items-center text-slate-800 py-3 px-4 mb-1 hover:bg-emerald-200 hover:text-slate-800 rounded-lg`
                }
            >
                <FaDollarSign className="mr-2" />
                Analysis
            </NavLink>
            <NavLink
                to="/expenses"
                className={({ isActive }) =>
                    `${
                        isActive
                            ? "bg-emerald-300 hover:bg-emerald-300 text-slate-800"
                            : ""
                    } flex items-center text-slate-800 py-3 px-4 mb-1 hover:bg-emerald-200 hover:text-slate-800 rounded-lg`
                }
            >
                <FaMoneyBillWave className="mr-2" />
                Expenses
            </NavLink>
            <NavLink
                to="/budgets"
                className={({ isActive }) =>
                    `${
                        isActive
                            ? "bg-emerald-300 hover:bg-emerald-300 text-slate-800"
                            : ""
                    } flex items-center text-slate-800 py-3 px-4 hover:bg-emerald-200 hover:text-slate-800 rounded-lg`
                }
            >
                <FaCalendarAlt className="mr-2" />
                Budgets
            </NavLink>
            <NavLink
                to="/profile"
                className="flex items-center align-bottom text-slate-800 p-3 w-[calc(100%-3rem)] absolute bottom-2 left-6 hover:bg-emerald-200 hover:text-slate-800 rounded-lg"
            >
                <div className="w-9 h-9 bg-emerald-500 rounded-full mr-2"></div>
                Profile
            </NavLink>
        </div>
    );
}
