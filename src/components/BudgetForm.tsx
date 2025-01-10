import { FaRegSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import useEmojiPicker from "../Hooks/useEmojiPicker";
import Input from "./Input";
import { useState } from "react";

const AddBudgetPopup = ({ action }: { action: string }) => {
    const { icon, isEmojiPickerOpen, setEmoji, toggleEmojiPicker } =
        useEmojiPicker();
    const [budgetItem, setBudgetItem] = useState<string>("");
    const [budgetAmount, setBudgetAmount] = useState<string>("");

    return (
        <div>
            <div>{action === "create" ? "Create Budget" : "Edit Budget"}</div>
            <div
                className="flex justify-center items-center mt-6 p-3 w-10 h-10 border border-dashed border-gray-200 rounded-lg cursor-pointer relative"
                onClick={toggleEmojiPicker}
            >
                {icon ? <div> {icon} </div> : <FaRegSmile />}
                {isEmojiPickerOpen && (
                    <div className="absolute top-[100%] w-full">
                        <EmojiPicker onEmojiClick={setEmoji} />
                    </div>
                )}
            </div>
            <Input
                id="allocatedAmount"
                label="Budget Item"
                type="text"
                value={budgetItem}
                placeholder="Budget item"
                handleChange={setBudgetItem}
            />

            <Input
                id="allocatedAmount"
                label="Allocated Amount"
                type="text"
                value={budgetAmount}
                placeholder="Budget amount"
                handleChange={setBudgetAmount}
            />
            <button className="p-4 bg-emerald-400 text-slate-100 rounded-md mt-3 w-full cursor-pointer">
                {action === "create" ? "Create Budget" : "Edit Budget"}
            </button>
        </div>
    );
};

export default AddBudgetPopup;
