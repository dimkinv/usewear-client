import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchItemsByTypeThunk } from "../../store/items.thunks";
import { typedUseSelector } from "../../store/store";
import { ItemsPageParams } from "./items-page-params";

export const ItemsPage: React.FC = () => {
    const { type } = useParams<ItemsPageParams>();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchItemsByTypeThunk(type));
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
                            <TableRow key={item._id as string}>
                                <TableCell>{item._id}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
