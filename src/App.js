import React  from 'react';
import './App.css';
import {
  useQuery,
  gql,
} from "@apollo/client";

function App() {
  const GET_JOBS = gql`
    query GetJobs {
      jobs {
        title
        applyUrl
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) return <p>Loading...</p>;
  else if (error) return <p>Error...</p>
  else {
    return (
      <div className="App">
        <table>
          <tbody>
            {
            data.jobs.map((job, index) =>
              <tr key={index}>
                <td>{job.title}</td>
                <td><a href={job.applyUrl}>{job.applyUrl}</a></td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
