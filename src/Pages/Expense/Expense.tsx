import LatestExpensesList from "../../components/ExpensesList";

export default function Expense() {
    return (
        <>
            <LatestExpensesList title={"Expenses"} disableActions={false} />
        </>
    );
}
