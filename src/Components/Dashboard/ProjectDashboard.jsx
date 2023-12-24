// ProjectDashboard.js
import  { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router';
import ProjectForm from './ProjectForm';
import './ProjectDashboard.css';
import Sidebar from './Sidebar';

const ProjectDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [filter, setFilter] = useState('All'); // Default filter is 'All'
  const [searchQuery, setSearchQuery] = useState('');
const navigate= useNavigate();
  const allCount = projects.length;
  const completedCount = projects.filter((project) => project.status === 'Completed').length;
  const ongoingCount = projects.filter((project) => project.status === 'Ongoing').length;
  const upcomingCount = projects.filter((project) => project.status === 'Upcoming').length;


  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem('user')) !== null;

    if (!isAuthenticated) {
      // Redirect to the login page if the user is not authenticated
      // navigate('/login');
    }
  }, [navigate]);

  const handleAddProject = (project) => {
    setProjects([...projects, { ...project, status: 'Status' }]);
  };

  const handleStatusButtonClick = (index) => {
    const projectStatus = projects[index].status;

    // Only allow opening the dropdown if the status is not "Completed"
    if (projectStatus !== 'Completed') {
      setSelectedProjectIndex(index);
    }
  };

  const handleStatusChange = (newStatus) => {
    const updatedProjects = [...projects];
    updatedProjects[selectedProjectIndex] = { ...updatedProjects[selectedProjectIndex], status: newStatus };
    setProjects(updatedProjects);
    setSelectedProjectIndex(null);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  // Filter projects based on the selected filter and search query
  const filteredProjects = projects
    .filter((project) => (filter === 'All' || project.status === filter))
    .filter((project) => project.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div style={{display:'flex',gap:"30px"}}>
      <div >
        <Sidebar/>
      </div>
    <div style={{paddingTop:"10px",width:"70vw"}}>

      
      <div style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>

     
      <h3>Projects 2023</h3>
      <input
        type="text"
        placeholder="Search by project name..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{borderRadius:'10px',marginTop:"3px"}}
      />
   
      </div>
      {/* <div style={{display:"flex",justifyContent:'space-between'}}>
        <h3>Intelligent Analysis Highlights</h3>

        <button style={{backgroundColor:"black"}}>Reanalysis</button>
      </div> */}



     <div style={{display:"flex",justifyContent:'space-between'}}>
      <div>
      <button
          className={`filter-button ${filter === 'All' ? 'selected' : ''}`}
          onClick={() => handleFilterChange('All')}
        >
          All Projects ({allCount})
        </button>
        <button
          className={`filter-button ${filter === 'Completed' ? 'selected' : ''}`}
          onClick={() => handleFilterChange('Completed')}
        >
          Completed ({completedCount})
        </button>
        <button
          className={`filter-button ${filter === 'Ongoing' ? 'selected' : ''}`}
          onClick={() => handleFilterChange('Ongoing')}
        >
          Ongoing ({ongoingCount})
        </button>
        <button
          className={`filter-button ${filter === 'Upcoming' ? 'selected' : ''}`}
          onClick={() => handleFilterChange('Upcoming')}
        >
          Upcoming ({upcomingCount})
        </button>
      </div>
      
      <button onClick={() => setIsFormOpen(true)}>Add Project</button>
      </div>
      {isFormOpen && <ProjectForm onAddProject={handleAddProject} onCloseForm={handleCloseForm} />}
      <div className='project-container'>
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-box" >
            <div className="status-container">
              <button
                className={`status-button ${project.status === 'Ongoing' ? 'ongoing' : ''} ${project.status === 'Completed' ? 'completed' : ''}`}
                onClick={() => handleStatusButtonClick(index)}
              >
                {project.status}
              </button>
              <div className={`status-dropdown ${selectedProjectIndex === index ? 'show' : ''}`}>
                <button onClick={() => handleStatusChange('Ongoing')}>Ongoing</button>
                <button onClick={() => handleStatusChange('Upcoming')}>Upcoming</button>
                <button onClick={() => handleStatusChange('Completed')}>Completed</button>
                <button onClick={() => handleStatusChange('Status')}>Close</button>
              </div>
            </div>
            <div className="project-box-content">
            <h3 style={{textAlign:'start',marginBottom:"4px",marginTop:"4px"}}>{project.name}</h3>
            <p style={{textAlign:'start',marginTop:"0px"}}> {project.time} days </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectDashboard;
