/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState} from 'react';
import './index.css';

const FilterAnimals = (props: any) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  

  const handleClearFilter = () => {
    setSelectedType('');
    setSelectedStatus('');
    props.filter('', '');
  };

  const handleTypeClick = (vrsta: any) => {
    setSelectedType(vrsta);
    props.filter(vrsta, selectedStatus);
  };

  const handleStatusClick = (status: any) => {
    setSelectedStatus(status);
    props.filter(selectedType, status);
  };

  const types = ['Dog', 'Cat', 'else'];
  const status = ['Adopted', 'Not Adopted'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // overflow: 'hidden',
        position: 'relative',
        top: 10,
      }}>
      <div style={{color: '#1212126b', fontSize: '2rem'}}>FILTERS:</div>
      <div style={{display:"flex", marginLeft: "40px", flexWrap: 'wrap'}}>
        <div className="button-containerType">
          <div style={{color: '#1212126b', fontSize: '1.2rem', marginRight:'10px', fontWeight:'500'}}>BY TYPE</div>
          
          <button onClick={handleClearFilter} className="filterButton">
            Clear Filter
          </button>
          {types.map((vrsta, index) => (
            <button
              key={index}
              onClick={() => {
                if (vrsta === selectedType) {
                  handleTypeClick('');
                } else {
                  handleTypeClick(vrsta);
                }
              }}
              className={
                selectedType === vrsta ? 'filterButton active' : 'filterButton'
              }>
              {vrsta}
            </button>
          ))}
        </div>

        <div className="button-containerAdopted">
          <div style={{color: '#1212126b', fontSize: '1.2rem', marginRight:'10px', fontWeight:'500'}}>BY STATUS</div>
          <button onClick={handleClearFilter} className="filterButton">
            Clear Filter
          </button>
          {status.map((status, index) => (
            <button
              key={index}
              onClick={() => {
                if (status === selectedStatus) {
                  handleStatusClick('');
                } else {
                  handleStatusClick(status === 'Adopted' ? true : false);
                }
              }}
              className={
                selectedStatus === status
                  ? 'filterButton active'
                  : 'filterButton'
              }>
              {status}
              <i className="fa-light fa-paw"></i>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterAnimals;
