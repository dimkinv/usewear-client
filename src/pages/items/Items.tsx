import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { Item } from "../../models/item/item.model";
import { setSelectedItem } from "../../store/items/items.slice";
import { fetchItemsByTypeThunk } from "../../store/items/items.thunks";
import { setPageTitle } from "../../store/main/main.slice";
import { typedUseSelector } from "../../store/store";
import { ItemsPageParams } from "./items-page-params";

export const ItemsPage: React.FC = () => {
    const { type } = useParams<ItemsPageParams>();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchItemsByTypeThunk(type));
        dispatch(setPageTitle(`Usewear - ${type}`));
    }, [dispatch, type]);

    const items = typedUseSelector(state => state.itemsStore.items);
    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map(item =>
                            <TableRow key={item._id as string} onClick={onItemClicked.bind(null, item)}>
                                <TableCell>{item._id}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );

    function onItemClicked(item: Item) {
        dispatch(setSelectedItem(item));
        history.push(`/item-details/${item._id}`);
    }
}
