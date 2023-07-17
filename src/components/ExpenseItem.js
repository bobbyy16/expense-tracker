import React from 'react'
import '../styles/ExpenseItem.css'
export default function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>March 28th 2023</div>
            <div className="expense-item__description">
                <h2>Bike Insurance</h2>
                <div className="expense-item__price">1600</div>
            </div>
        </div>
    )
}
