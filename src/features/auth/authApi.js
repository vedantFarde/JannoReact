export function fetchUser() {
  const url = `http://localhost:8000/auth/login/success`;
  return new Promise(async (resolve) => {
    try {
      const res = await fetch(url, { credentials: "include" });
      const data = await res.json();
      resolve(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      resolve(null);
    }
  });
}
