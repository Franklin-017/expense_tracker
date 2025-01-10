import { useState } from "react";

export default function usePopup() {
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false)
    const [popupAction, setPopupAction] = useState<string>('create')

    const handlePopupVisibility = (action?: string) => {
        setIsPopupVisible(!isPopupVisible);
        (action && setPopupAction(action))
    }
    return { popupAction, isPopupVisible, handlePopupVisibility }
}
