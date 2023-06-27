export const fetchData = () => {
    return fetch('http://localhost:3001/course')
      .then((res) => res.json())
      .catch((error) => {
        console.error('Error fetching data:', error);
        return [];
      });
  };
  