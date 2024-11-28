import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tableData, setTableData] = useState([]);
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTableData(data);

        const linksResponse = await fetch('links.json');
        if (!linksResponse.ok) throw new Error('Network response was not ok');
        const links = await linksResponse.json();
        setLinksData(links);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
      <main>
        <div className="container">
          <div className="first-column">
            <table className="table">
              <thead>
                <tr>
                  <th className="first-row"></th>
                  {tableData[0] && tableData[0].values.map((col, index) => (
                    <th key={index} className="first-row">{col}</th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Chromatin matrix</th>
                  {tableData[0] && tableData[0].values.map((col, index) => (
                    <th key={index}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody id="data-body">
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{row.name}</td>
                    {row.values.map((value, cellIndex) => (
                      <td key={cellIndex}>
                        {linksData[rowIndex] && linksData[rowIndex].links[cellIndex] ? (
                          <a href={linksData[rowIndex].links[cellIndex]} target="_blank" rel="noopener noreferrer">
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
  );
}

export default App;