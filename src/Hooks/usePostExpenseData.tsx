import { useState } from 'react'

export default function usePostExpenseData() {
    const [ category, setCategory ] = useState<string>("");
    const [ amount, setAmount ] = useState<string>("");
    const [ item, setItem ] = useState<string>("");
    const [ date, setDate ]= useState<Date | undefined>(new Date());

    const postData = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(category, amount, item, date);
    }

  return { category, setCategory, amount, setAmount, item, setItem, date, setDate, postData }
}
