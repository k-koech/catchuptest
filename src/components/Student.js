import React from 'react'

function Student({singleStudent}) 
{
  return (
    
    <tr>
    <td scope="col">{singleStudent.name}</td>
    <td scope="col">{singleStudent.role}</td>
    <td scope="col">{singleStudent.class}</td>
</tr>
  )
}

export default Student




{/* <tr>
<td>{singleStudent.name}</td>
<td>{singleStudent.class}</td>
<td>{singleStudent.role}</td>
</tr> */}