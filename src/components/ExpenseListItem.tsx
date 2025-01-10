import { expenseListOptionType, expenseListType } from "../Interfaces/DashboardType";

export default function ExpenseListItem({
    item,
    amountSpent,
    category,
    date,
    disableActions,
    handlePopupVisibility
}: expenseListType & expenseListOptionType) {
    return (
        <div className="flex justify-between items-center p-3 border-t border-gray-200 last:border-b even:bg-slate-100">
            <p className="w-[20%]">{item}</p>
            <p className="w-[20%]">{category}</p>
            <p className="w-[20%]">{amountSpent}</p>
            <p className="w-[20%]">{date.toLocaleDateString()}</p>
            { !disableActions && (
                <>
                    <p className="w-[10%] text-sm text-blue-500 cursor-pointer" onClick={() => handlePopupVisibility('edit')}>
                        Edit
                    </p>
                    <p className="w-[10%] text-sm text-red-500 cursor-pointer" onClick={() => handlePopupVisibility('delete')}>
                        Delete
                    </p>
                </>
            )}
        </div>
    );
}
