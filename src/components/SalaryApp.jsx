
const SalaryApp = () => {
  return (
      <div className=' flex flex-col items-center gap-5 '>
          <h1  className='title'>Salary App</h1>
          <form className='emmployee-form' > 
          
          <input
            className='input'
            type="text"
            placeholder='Name'
            name='name'
            required
          />

          <input
            className='input'
            type="text"
            placeholder='Salary'
            name='name'
            required
          />
          

          <input 
          className='input'
          type="text" 
          placeholder='Profession'
          name='salary'
          required
          />
          <button className='btn' type="submit">Submit</button>

          <div className='flex flex-col items-center gap-5'>
            <input 
            type="text"
            placeholder='Search Data'
             />
             <button className='px-3 border cursor-pointer' type="button">Search</button>
          </div>
        </form>
    </div>
  )
}

export default SalaryApp
