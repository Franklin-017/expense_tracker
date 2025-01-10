export default function DeleteExpense() {
  return (
    <div>
        <h4 className="">Delete Expense</h4>
        <p className="py-2 text-slate-400 text-sm">Are you sure to delete the Expense?</p>
        <div className="flex items-center justify-end gap-6 mt-3">
            <button className="py-2 px-4 text-slate-800 border border-slate-800 rounded-md text-sm">Cancel</button>
            <button className="py-2 px-4 bg-red-400 hover:bg-red-500 text-slate-100 rounded-md text-sm">Delete</button>
        </div>
    </div>
  )
}
