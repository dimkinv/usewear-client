import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { ItemType } from "../../models/item-type";
import { Item } from "../../models/item/item.model";
import { setSelectedItem } from "../../store/items/items.slice";
import { fetchItemsByTypeThunk } from "../../store/items/items.thunks";
import { setPageTitle } from "../../store/main/main.slice";
import { typedUseSelector } from "../../store/store";

export const ItemsPage: React.FC = () => {
    const params = useParams();
    const type = params['type'] as ItemType;
    const dispatch = useDispatch();
    const navigation = useNavigate();

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
        navigation(`/item-details/${item._id}`);
    }
}
