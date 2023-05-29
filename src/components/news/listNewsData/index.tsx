import axios from 'axios';
import {useContext, useState} from 'react';
import {RoleContext} from '../../../context';
import DeleteNews from '../deleteNews';
import './index.css';

const ListNewsData = (props: any) => {
  const role = useContext(RoleContext);

  const [important, setImportant] = useState<boolean>(props.vazno);
  

  const handleChange = () => {
    setImportant((current: any) => !current);
    axios.patch('http://localhost:3001/obavijesti/' + props.id, {
      vazno: !important,
      datum: new Date().toISOString(),
    });
  };

  return (
    <div className={`bla ${important}`}>
      <div className="newsEdit">
        <div className="title">
          <h3>{props.naslov}</h3>
          
          <div>
            {new Date(props.datum).toLocaleDateString('en-GB')}
          </div>
        </div>
        <div className="newsSubEdit">
          <div>{props.tekst}</div>
        </div>
      </div>
      {role.isAdmin && (
        <div className="actionButtonNews">
          <DeleteNews id={props.id} delete={props.setListNews} />
          <div>
            <input
              type="checkbox"
              checked={important}
              onChange={handleChange}
              name="important"
              // onClick={send}
            />
            IMPORTANT
          </div>
        </div>
      )}
    </div>
  );
};

export default ListNewsData;
