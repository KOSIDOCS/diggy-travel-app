// save State
export const saveState = (name, state) => {
  try {
    // convert the state from JSON, into a String
      if (!localStorage.getItem(name)) {
        const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
    }
  } catch (error) {
    console.log("Error saving data");
  }
};

// Load State
export const loadState = (name) => {
  try {
    // Grab the state from local storage
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) {
      return undefined;
    }
    // convert the string into JSON.
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
