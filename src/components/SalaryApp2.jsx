import { useState } from 'react';

const SalaryApp2 = () => {
  const [allData, setAllData] = useState([
    { name: 'John', salary: '50000', profession: 'Developer' },
    { name: 'Jane', salary: '60000', profession: 'Designer' },
    { name: 'Doe', salary: '55000', profession: 'Manager' }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    salary: '',
    profession: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.salary || !formData.profession) return;

    setAllData(prev => [...prev, formData]); // add new employee
    setFormData({ name: '', salary: '', profession: '' }); // reset form
  };

  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='title'>Add New Employee</h1>
      <form className='emmployee-form' onSubmit={handleSubmit}>
        <input
          className='input'
          type="text"
          name='name'
          placeholder='Name'
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className='input'
          type="number"
          name='salary'
          placeholder='Salary'
          required
          value={formData.salary}
          onChange={handleChange}
        />
        <input
          className='input'
          type="text"
          name='profession'
          placeholder='Profession'
          required
          value={formData.profession}
          onChange={handleChange}
        />
        <button className='btn' type="submit">Submit</button>
      </form>

      <h1 className='title'>Employee list</h1>
      <ul>
        {
          allData.map((el, idx) => (
            <li key={idx} className='employee flex gap-3'>
              <span>{el.name}</span>
              <span>{el.salary}</span>
              <span>{el.profession}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SalaryApp2;
