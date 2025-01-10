export interface popupType {
    isPopupVisible: boolean;
    handlePopupVisibility: (action: string) => void;
    Component: React.ReactElement;
}

export interface inputType {
    id: string;
    label?: string;
    type: string;
    value: string;
    placeholder?: string;
    handleChange: Function;
}
