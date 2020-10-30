import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { StoreContext } from "..";

const NewItem: React.FC = () => {
  const [value, setValue] = useState("");
  const itemList = useContext(StoreContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    itemList.addItem(value);
    setValue("");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <input
        className="NewItem-input"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <input className="NewItem-submit button" type="submit" />
    </form>
  );
};

export default observer(NewItem);
