import React from 'react';

export type FieldArrayRemoveProps = {
    name?: string;
    children: React.ReactNode;
    deleteFromInner?: any;
    deleteItemState?: () => void;
};
