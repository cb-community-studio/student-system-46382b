
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';


const FeesDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.amount}  />
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.datepaid}</p>
    const tagTemplate3 = (rowData, { rowIndex }) => <Tag value={rowData.paystatus}  ></Tag>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="amount" header="Fee Amount " body={inputTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="datepaid" header="Date Paid" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="paystatus" header="Pay Status" body={tagTemplate3} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default FeesDataTable;