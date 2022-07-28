import './MediaTable.css';
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Features() {
  const [gridApi, setGridApi] = useState()
  const rowData = [
    { features: "Toyota", detail: "Celica"}
  ];

  const getDynamicColumns = (obj) => {
    return Object.keys(obj).map(key => ({ field: key }))
  }


  const defColumnDefs = { flex: 1 }

  const onGridReady = (params) => {
    setGridApi(params)
    params.api.setColumnDefs(getDynamicColumns(rowData[0]))
  }

  return (
  <div className="ag-theme-alpine" style={{ height: 400 }}>
    <AgGridReact
      rowData={rowData}
      defaultColDef={defColumnDefs}
      onGridReady={onGridReady} />
  </div>
  );
}

export default Features;