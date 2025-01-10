export interface dashboardCardType {
    cardTitle: string;
    amount: string;
    icon: React.ReactElement;
}

export interface budgetCardType {
    budgetTitle: string;
    spendAmount: string;
    allocatedAmount: string;
    emoji: string;
}

export type expenseListType = {
    item: string;
    category: string,
    amountSpent: string;
    date: Date;
}

export type expenseListOptionType = {
    disableActions: boolean;
    handlePopupVisibility: (action?:string) => void;
}
