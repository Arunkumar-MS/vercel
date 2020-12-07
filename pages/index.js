import React from 'react';
import styles from '../styles/Home.module.css'
import { getLunchProgram } from '../service';
import { SPACE_X_URL } from "../constents/URLS";
import { SpaceXContext } from '../components/context';
import { getFiletrs } from '../utils/getFilters';
import FilterContiner from '../components/filterContiner';

const App = (props) => {
  const [programs, setPrograms] = React.useState(props.lunchProgram);
  const [filters, setFilters] = React.useState(props.filter);

  const programsFetcher = async (urls) => {
    const programs = await getLunchProgram(urls);
    setPrograms(programs);
  }

  const updateFiletrs = (filter) => setFilters(filter);

  return (
    <SpaceXContext.Provider value={{ programs, programsFetcher, filters, updateFiletrs }}>
      <div className={styles.container}>
        <FilterContiner filters={filters} />
        <div>
          cardss
       </div>
      </div>
    </SpaceXContext.Provider>
  )
}


App.getInitialProps = async (ctx) => {
  const filter = getFiletrs(ctx.query);
  console.log(filter);
  let url = SPACE_X_URL;
  if (filter.year || filter.lunch || filter.landing) {
    if (filter.year) {
      url += `&launch_year=${filter.year}`;
    }
    if (filter.lunch !== null) {
      url += `&launch_success=${filter.lunch}`;
    }
    if (filter.landing !== null) {
      url += `&landing_success=${filter.landing}`;
    }
  }
  console.log(url);
  const res = await getLunchProgram(url);
  console.log(url);
  return { lunchProgram: res, filter };
}

export default App;

