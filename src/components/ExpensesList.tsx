import ExpenseListItem from "./ExpenseListItem"
import expensesList from "../Data/ExpenseList";
import usePopup from "../Hooks/usePopup";
import Popup from "./Popup";
import ExpenseFrom from "./ExpenseFrom";
import DeleteExpense from "./DeleteExpense";

export default function LatestExpensesList( { title, disableActions }: { title: string, disableActions:boolean } ) {
    const { isPopupVisible, popupAction, handlePopupVisibility} = usePopup();
    return (
        <div className="col-span-3 rounded-lg h-[calc(100vh-80px)] overflow-hidden">
            <h4 className="text-sm font-bold text-gray-500 mb-6">
                { title }
            </h4>

            <div className="max-h-[calc(100vh-120px)] overflow-auto">
                {expensesList.map((expense, index) => (
                    <ExpenseListItem
                        key={index}
                        item={expense.item}
                        amountSpent={expense.amountSpent}
                        category={expense.category}
                        date={new Date(expense.date)}
                        disableActions={disableActions}
                        handlePopupVisibility={handlePopupVisibility}
                    />
                ))}
            </div>

            <Popup isPopupVisible={isPopupVisible} handlePopupVisibility={handlePopupVisibility} Component={ popupAction === "edit" ? <ExpenseFrom popupAction={popupAction} />: <DeleteExpense />} />

        </div>
    );
}
