import React, { useState } from 'react'
import { suppliers } from '../data/supplierData'
function StateSample8() {

    const [suppliersList, setsuppliersList] = useState(suppliers)
    const removeSuppliers = () =>{
        setsuppliersList([]);
    }

    const deleteSupplierId = (id) =>{
        var filteredSuppliers = setsuppliersList.filter(q => q.id !== id);
        setsuppliersList(filteredSuppliers);
    }
    return (
        <>
           
        <button onClick={removeSuppliers}>Kategorileri Sil</button>
            <table>
                <tr>
                    <td>Id</td>
                    <td>company Name</td>
                    <td>contact Name</td>
                    <td>contact Title</td>
                </tr>

                {
                    suppliersList.map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <button onClick = { () => deleteSupplierId(item.id)}>Delete</button>
                        </tr>
                    ))

                    

                    
                }
            </table>
        
        </>
    )
}

export default StateSample8
