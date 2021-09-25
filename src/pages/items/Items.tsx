import React from "react";
import { useParams } from 'react-router-dom';
import { ItemsPageParams } from "./items-page-params";

export const ItemsPage: React.FC = () => {
    const { type } = useParams<ItemsPageParams>();
    return (
        <div></div>
    );
}
