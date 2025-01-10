import usePostExpenseData from "../Hooks/usePostExpenseData";
import Input from "./Input";

export default function ExpenseFrom({ popupAction }: { popupAction: string }) {
    const {
        category,
        setCategory,
        amount,
        setAmount,
        item,
        setItem,
        date,
        setDate,
        postData,
    } = usePostExpenseData();

    return (
        <div>
            <h4>{popupAction !== "edit" ? "Add Expense" : "Edit Expense"}</h4>

            <div>
                <Input
                    id="category"
                    label="Category"
                    type="text"
                    value={category}
                    placeholder="Category"
                    handleChange={setCategory}
                />
                <Input
                    id="amount"
                    label="Amount"
                    type="text"
                    value={amount}
                    placeholder="Amount"
                    handleChange={setAmount}
                />
                <Input
                    id="note"
                    label="Note"
                    type="text"
                    value={item}
                    placeholder="Note"
                    handleChange={setItem}
                />
                <Input
                    id="date"
                    label="Date"
                    type="date"
                    value={
                        date ? new Date(date).toISOString().split("T")[0] : ""
                    }
                    handleChange={setDate}
                />

                <button className="p-3 ml-auto bg-emerald-400 rounded-lg mt-3 w-full text-slate-100" onClick={postData}>
                    {popupAction !== "edit" ? "Add Expense" : "Save Changes"}
                </button>
            </div>
        </div>
    );
}
