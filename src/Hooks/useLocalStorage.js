import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

/* const defaultTodos = [
  { text: "Hacer compras", completed: true },
  { text: "Crear cuentas de marketing", completed: false },
  { text: "Ir al banco", completed: false },
  { text: "Hacer aseo en la casa", completed: false },
  { text: "Enviar cotizaciones", completed: true },
];

localStorage.setItem('TASKAPP_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TASKAPP_V1');  */
