import AddBudgetPopup from "../../components/BudgetForm";
import BudgetCard from "../../components/BudgetCard";
import { FaPlus } from "react-icons/fa";
import usePopup from "../../Hooks/usePopup";
import Popup from "../../components/Popup";

export default function Budgets() {
    const { popupAction, isPopupVisible, handlePopupVisibility } = usePopup();

    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div
                    className="border border-gray-200 p-6 rounded-lg flex justify-center items-center flex-col cursor-pointer"
                    onClick={() => handlePopupVisibility("create")}
                >
                    <div className="border border-dashed w-12 h-12 flex justify-center items-center rounded-full">
                        <FaPlus />
                    </div>
                    <p className="mt-3">Add New Budgets</p>
                </div>

                <BudgetCard
                    budgetTitle="Food"
                    spendAmount="3000"
                    allocatedAmount="4000"
                    emoji="🍔"
                />
                <BudgetCard
                    budgetTitle="Transport"
                    spendAmount="900"
                    allocatedAmount="1200"
                    emoji="🚗"
                />
                <BudgetCard
                    budgetTitle="Shopping"
                    spendAmount="0"
                    allocatedAmount="1500"
                    emoji="🛍️"
                />
                <BudgetCard
                    budgetTitle="Rent"
                    spendAmount="10000"
                    allocatedAmount="10000"
                    emoji="🏠"
                />
            </div>

            <Popup
                isPopupVisible={isPopupVisible}
                handlePopupVisibility={handlePopupVisibility}
                Component={<AddBudgetPopup action={popupAction} />}
            />
        </>
    );
}
