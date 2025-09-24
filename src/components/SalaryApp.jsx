     import { useState } from 'react'

  const SalaryApp = () => {
    const[formData, setFormData] = useState({
      name: '',
      salary: '',
      profession: ''
    });

    const[allData, setAllData]= useState([])
    const[editItem, setEditItem]= useState(null)
    const[search, setSearch]= useState('')

    function handleChange(e) {
      setFormData((preObj)=>(
        {...preObj, [e.target.name]: e.target.value}
      ))
    }

    function handleSubmit(e) {
      e.preventDefault();
      console.log(formData);
      if(editItem !== null) {
        let dataBase= [...allData]
        dataBase[editItem]= formData
        setAllData(dataBase)
        setEditItem(null)
      } else{
        setAllData([...allData, formData]);
      }
      setFormData({
        name: '',
        salary: '',
        profession: ''
      })
    }

    function handleEdit(idx) {
      console.log(idx);
      let item= allData[idx]
      setFormData(item)
      setEditItem(idx)
    }

    function handleDelete(idx) {
      console.log(idx);
      setAllData((preArr)=> (
        preArr.filter((el, index)=> index !==idx)
      ))
    }
    return (
      <div className='flex flex-col items-center gap-5'>
          <h1 className='text-3xl font-medium'>Salary App2</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center' >
              <input className='border p-2' type="text" name='name' placeholder='Name' value={formData.name} onChange={handleChange} required/> 
              <input className='border p-2' type="number" name='salary' placeholder='Salary' value={formData.salary} onChange={handleChange} required/>
              <input className='border p-2' type="text" name='profession' placeholder='Profession' value={formData.profession} onChange={handleChange} required/>
              <button className='border px-4 py-1 cursor-pointer' type="submit">Submit</button>
          </form>

          <div className='flex gap-4'>
            <input className='border px-2' type="text" placeholder='Search Data' value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <button className='px-3 border cursor-pointer' type="button">Search</button>
          </div>
          {/* rendering form data */}
          <div>
            <ul className='flex flex-col gap-4'>
              {allData.map((el, idx)=>
                <li className='flex gap-3 items-center' key={idx}>
                  <strong>Name:</strong> {el.name}
                  <strong>Salary:</strong> {el.salary}
                  <strong>Profession:</strong> {el.profession}
                  <button onClick={()=>handleEdit(idx)} className='cursor-pointer px-2 border' type="button">Edit</button>
                  <button onClick={()=>handleDelete(idx)} className='cursor-pointer px-2 border' type="button">Delete</button>
                </li>
              )}
            </ul>
          </div>
      </div>
    )
  }

  export default SalaryApp