

const QueryReader = () => {



  return (
    <div>
      <h1>Query Reader</h1>
      <ul>
        {Object.keys(queryParams).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {queryParams[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryReader;
