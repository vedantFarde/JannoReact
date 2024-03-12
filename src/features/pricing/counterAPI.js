export function fetchCount() {
  const url = `http://localhost:8000/auth/login/success`;

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
