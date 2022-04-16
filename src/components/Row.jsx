import React, { useEffect, useState } from 'react'
import axios from "axios"




export const Row = () => {

    const [country,setCountry]=useState("")
    const [text,setText]=useState([])

    const [city,setcity]=useState("")
    const [text1,setText1]=useState([])

    const [pop,setPop]=useState("")
    const [text2,setText2]=useState([])




    useEffect(()=>{
      addCountry()
    },[])

    useEffect(()=>{
      addCity()
    },[])

    useEffect(()=>{
      addPop()
    },[])

    const addCountry=()=>{
      axios.get(`http://localhost:8080/country`).then((res)=>{
        setText(res.data)
      })
    }


    const addCity=()=>{
      axios.get(`http://localhost:1234/city`).then((res)=>{
        setText1(res.data)
      })
    }

    const addPop=()=>{
      axios.get(`http://localhost:2222/pop`).then((res)=>{
        setText2(res.data)
      })
    }
    


    
  return (
    <div className='App'>

        <div >
  
  <table >
        <thead className='tbody1'>
       <tr>
         <th>ID</th>
         <th>Country</th>
         <th>City</th>
         <th>Population</th>
         <th>Edit</th>
         <th>Delete</th>
  
       </tr>
        </thead>
        <tbody >
          <tr className='tr1'>
            <td>{text.map((e)=>{
                return <div key={e.id}>{e.id}</div>
            })}</td>
            <td>{text.map((e)=>{
                return <div key={e.id}>{e.title}</div>
            })}</td>
            <td>{text1.map((e)=>{
                return <div key={e.id}>{e.title}</div>
            })}</td>
            <td>{text2.map((e)=>{
                return <div key={e.id}>{e.title}</div>
            })}</td>
            <td><button>EDIT</button></td>
            <td><button>DELETE</button></td>
          </tr>
        </tbody>
      </table>
  </div>
  
  
   <div className='Inputbox'>
   <input type="text" onChange={(e)=>setCountry(e.target.value)}/>
      <button onClick={()=>{
          axios.post(`http://localhost:8080/country`,{
              title:country
          }).then(()=>{
              alert("Country data added Sussefully")
              addCountry()
          })
      }}>ADD Country</button>
      <br />
      <input type="text" onChange={(e)=>setcity(e.target.value)}/>
      <button onClick={()=>{
          axios.post(`http://localhost:1234/city`,{
              title:city
          }).then(()=>{
              alert("City data added Sussefully")
              addCity()
          })
      }}>City</button>
      <br />
      <input type="text" onChange={(e)=>setPop(e.target.value)} />
      <button onClick={()=>{
          axios.post(`http://localhost:2222/pop`,{
              title:pop
          }).then(()=>{
              alert("Population data added Sussefully")
              addPop()
          })
      }}>Population</button>
   </div>

   
    </div>
  )
}

