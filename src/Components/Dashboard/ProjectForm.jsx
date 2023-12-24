// ProjectForm.js
import  { useState } from 'react';
import './ProjectForm.css'; // Import the styles

const ProjectForm = ({ onAddProject, onCloseForm }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Project name is required';
    }

    if (!time.trim()) {
      newErrors.time = 'Time to complete is required';
    } else if (isNaN(time)) {
      newErrors.time = 'Time must be a number';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const project = { name, time };
      onAddProject(project);
      setName('');
      setTime('');
      onCloseForm();
    }
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <button className="close-button" onClick={onCloseForm}>
          &#x2715;
        </button>
        <h2>Add Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
           
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Project Name'
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
           
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder='Time To Deliver'
            />
            {errors.time && <span className="error">{errors.time}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
