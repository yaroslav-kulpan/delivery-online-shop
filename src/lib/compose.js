const compose = (...func) => (comp) => {
  return func.reduce((wrapped, f) => f(wrapped), comp);
};

export default compose;