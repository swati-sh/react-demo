import React, { useState } from "react";
import SafesListComponent from "./safesList";
import { useDispatch } from "react-redux";
import "./index.css";
const initialData = { name: "", owner: "", desc: "", secrets: [] };
const SafesComponent = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(initialData);
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitClicked = () => {
    dispatch({ type: "ADD", payload: data });
  };

  return (
    <div>
      <h1>Create Safes</h1>
      <div className="form-wrapper">
        <input
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={(e) => onInputChange(e)}
        />
        <input
          name="owner"
          placeholder="Owner"
          value={data.owner}
          onChange={(e) => onInputChange(e)}
        />
        <input
          name="desc"
          placeholder="Description"
          value={data.desc}
          onChange={(e) => onInputChange(e)}
        />
        <button onClick={() => onSubmitClicked()}>Create</button>
      </div>

      <SafesListComponent />
    </div>
  );
};

export default SafesComponent;
