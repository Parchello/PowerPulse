const formatingDate = (date) => {
  const dateObject = new Date(date);
  const day = String(dateObject.getDate()).padStart(2, '0');
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const year = dateObject.getFullYear();
  return `${day}/${month}/${year}`;
};

export const initialState = {
  dayDashboard: [],
  products: [],
  exercises: [],
  isLoading: false,
  error: null,
  initialDate: formatingDate(new Date())
};
