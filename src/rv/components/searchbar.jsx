import React, { useEffect, useState } from 'react'
import Select from 'react-select'

export default function Searchbar(props) {

    // const [enable,setEnable] = useState(false);

 

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'chocolate', label: 'Chocolate' },
      ]

useEffect(()=>{
    // console.log(props.data)
});

  return (
    <div id='drop-down-div'>
      
            {
                props.data.map((data)=>{
                    return(
                    <div> <Select  id='drop-down'  placeholder = {data[0].name} 
                    onChange={(val)=>{
                        console.log(val.value)
                    }}
                    options={data.map((data)=>{
                        return ({value:data.val , label: data.val})
                    })}
                    ></Select></div>
                    )
                })
            }
            <div> <input  id='drop-down-date' type='date'  ></input></div>

{/* {
    enable? <button  type="button" className="btn btn-primary m-2">Search</button>:
    <button type="button"  disabled className="btn btn-primary m-2">Search</button>
} */}
    <button type="button"   className="btn btn-primary m-2">Search</button>

    </div>
  )
}
