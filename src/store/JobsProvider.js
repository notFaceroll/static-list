import React, { useReducer, useEffect } from 'react';
import { JobsContext } from './jobs-context';
import { jobsData as jobsList } from '../components/JobsData';

const defaultState = { jobsList, tags: [] };

// Lógica de acrescentar ou remover as tags aqui

const jobsReducer = (state, action) => {
  switch (action.type) {
    case 'AddFilter': {
      console.log(state);
      const tagExists = state.tags.some((tag) => tag === action.payload.tag);
      if (tagExists) return state;
      state.tags.push(action.payload.tag);
      console.log(action.payload.tag);
      console.log(state.jobsList[0].tags);
      const filteredList = state.jobsList.filter((item) =>
        item.tags.some((tag) => tag === action.payload.tag)
      );
      console.log(filteredList);
      const newState = { jobsList: filteredList, tags: state.tags };
      console.log(newState);

      return newState;
    }
    case 'RemoveFilter': {
      console.log('Filter removed: ', action.payload.tag);
      return state;
    }
  }
};

const updateList = (list, tags) => {};

// useEffect com a lógica da comparação para renderizar os items filtrados
// usando a tags[] como dependência

export default function JobsProvider(props) {
  const [state, dispatch] = useReducer(jobsReducer, defaultState);

  useEffect(() => {
    console.log('Changed');
  }, [state]);

  const addFilter = (tag) => {
    dispatch({ type: 'AddFilter', payload: { tag } });
  };
  const removeFilter = (tag) => {
    dispatch({ type: 'AddFilter', payload: { tag } });
  };

  const jobContext = {
    jobsList: state.jobsList,
    addFilter,
    removeFilter,
    // filteredTags: state.tags,
  };

  return (
    <JobsContext.Provider value={jobContext}>
      {props.children}
    </JobsContext.Provider>
  );
}
