import { useState } from 'react';
import RevenueTable from './components/RevenueTable';
import Chart from './components/Chart';
import './styles.css';

const App = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div className="app">
      <div className="table-container">
        <RevenueTable onRowSelect={setSelectedRow} />
      </div>
      <div className="chart-container">
        {selectedRow && <Chart data={selectedRow} />}
      </div>
    </div>
  );
};

export default App;