import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// BEGIN (write your solution here)
import { actions, selectors } from '../slices/tasksSlice.js';
// END

const Tasks = () => {
  const dispatch = useDispatch();
  // BEGIN (write your solution here)
  const tasks = useSelector(selectors.selectAll);

  useEffect(() => {
    dispatch(actions.fetchTasks());
  }, [dispatch]);

  const handleRemoveTask = (id) => {
    dispatch(actions.removeTask(id));
  };
  // END

  return tasks && (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, name }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">{name}</span>
            <button type="button" className="close" onClick={() => handleRemoveTask(id)}>
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
