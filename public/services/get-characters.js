const apiUrl = "http://localhost:8080/api/characters";

async function getCharacters() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
