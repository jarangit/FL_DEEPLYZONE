import React from 'react'
import Expenses_table from '../../../../conponents/table/expenses_table'

const Expenses_page = () => {
  return (
    <div className='expenses_p'>
      <p className='expenses_p_title'>รายการโฆษณาทั้งหมด</p>
      <Expenses_table/>
    </div>
  )
}
Expenses_page.layout = "admin"

export default Expenses_page