import "./table.css";

const Table = ({ pageData }) => {
  return (
    <div className="table">
      <table>
        <tbody>
          {pageData.map((data) => {
            return (
              <tr key={data.id}>
                <td className="col-1">{data.parameter}</td>
                <td className="col-2">{data.desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
