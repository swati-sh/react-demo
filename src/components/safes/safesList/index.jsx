import React from "react";
import { useSelector } from "react-redux";

const SafesListComponent = () => {
  const safesList = useSelector((state) => state.safesList);
  return (
    <section>
      {safesList?.length === 0 ? (
        <div>No data Found</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Description</th>
              <th>Secrets</th>
            </tr>
          </thead>
          <tbody>
            {/* Rendering the safes list array */}
            {safesList?.map((safe) => (
              <tr key={safe.name}>
                <td>{safe.name}</td>
                <td>{safe?.owner}</td>
                <td>{safe?.desc}</td>
                <td>
                  {safesList?.secrets?.length > 0 ? (
                    <ul>
                      {safesList?.secrets?.map((ele) => (
                        <li>{ele}</li>
                      ))}
                    </ul>
                  ) : (
                    <div>No Secrets available</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default SafesListComponent;
