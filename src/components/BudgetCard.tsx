import { budgetCardType } from "../Interfaces/DashboardType";

export default function BudgetCard({
    budgetTitle,
    spendAmount,
    allocatedAmount,
    emoji,
}: budgetCardType) {
    return (
        <div className="border border-gray-200 p-6 rounded-lg">
            <div className="flex justify-between items-center">
                <div className="bg-gray-400 rounded-full w-9 h-9 flex items-center justify-center text-2xl">
                    {emoji}
                </div>
                <div className="text-lg font-semibold text-ellipsis whitespace-nowrap overflow-hidden max-w-24">
                    {budgetTitle}
                </div>
                <div className="text-2xl font-semibold text-emerald-500">
                    ${allocatedAmount}
                </div>
            </div>
            <div>
                <div className="flex justify-between mt-6">
                    <span className="text-xs text-gray-400">$0 spend</span>
                    <span className="text-xs text-gray-400">
                        ${spendAmount}
                    </span>
                    <span className="text-xs text-gray-400">
                        ${allocatedAmount}
                    </span>
                </div>
                <div className="w-[100%] h-[4px] bg-gray-300 rounded-full mt-2"></div>
            </div>
        </div>
    );
}
