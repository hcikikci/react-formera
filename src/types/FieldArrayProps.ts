import React from 'react';

export type FieldArrayProps = {
    name: string;
    children: React.ReactNode;
    saveOnSubmit?: boolean;
    itemStates?: any[];
    updateItemState?: (index: number, state: any) => void;
    deleteItemState?: (index: number) => void;
};
