import BudgetCard from "../../components/BudgetCard";
import DashboardCard from "../../components/DashboardCard";
import ExpenseCategoryChart from "../../components/ExpenseCategoryChart";
import LatestExpensesList from "../../components/ExpensesList";
import { FaDollarSign, FaReceipt, FaWallet, FaPiggyBank } from "react-icons/fa";

export default function Dashboard() {
    return (
        <>
            <>
                <p className="text-3xl text-slate-800 font-medium">
                    Hi, User 👋
                </p>
                <p className="text-base text-slate-800 font-medium mt-2 tracking-wide">
                    Here is what happenning with your money, Lets Manage your
                    expenses.
                </p>
            </>

            <div className="grid grid-cols-4 gap-4 mt-6">
                <DashboardCard
                    cardTitle="Income"
                    amount="$1000"
                    icon={<FaDollarSign />}
                />
                <DashboardCard
                    cardTitle="Expenses"
                    amount="$500"
                    icon={<FaReceipt />}
                />
                <DashboardCard
                    cardTitle="Budgets"
                    amount="$500"
                    icon={<FaWallet />}
                />
                <DashboardCard
                    cardTitle="Savings"
                    amount="$500"
                    icon={<FaPiggyBank />}
                />
                <ExpenseCategoryChart />
                <div className="grid grid-col-4 gap-4 col-span-1">
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
                </div>

                <LatestExpensesList
                    title={"Latest Expense"}
                    disableActions={true}
                />
                <div className="grid grid-col-4 gap-4 col-span-1">
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
            </div>
        </>
    );
}
