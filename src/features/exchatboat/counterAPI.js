export function fetchCount() {
  const url = "";

  return new Promise((resolve) =>
    setTimeout(async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        resolve(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        resolve(null); 
      }
    }, 500)
  );
}
