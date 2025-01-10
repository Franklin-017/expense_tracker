import { dashboardCardType } from "../Interfaces/DashboardType";

export default function DashboardCard({
    cardTitle,
    amount,
    icon
}: dashboardCardType) {
    return (
        <div className="border border-gray-200 p-6 text-slate-800 rounded-lg flex justify-between items-center">
            <div>
                <p className="text-base font-normal">{cardTitle}</p>
                <p className="text-2xl font-bold">{amount}</p>
            </div>

            <div className="w-20 h-20 bg-emerald-200 rounded-full flex items-center justify-center text-3xl text-emerald-500"> { icon }</div>
        </div>
    );
}
