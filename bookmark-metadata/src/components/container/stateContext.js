import React from "react";
const { Provider, Consumer } = React.createContext();

function ProviderObject(props) {
  const [objectList, setObjectList] = React.useState([]);
  return (
    <Provider
      value={{
        objectList: objectList,
        setObjectList: setObjectList,
      }}
    >
      {props.children}
    </Provider>
  );
}
export { ProviderObject, Consumer as ConsumerObject };
