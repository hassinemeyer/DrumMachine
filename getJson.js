export async function fetchJSON(url) {
  try {
    console.log(`Fetching JSON data from ${url}`); // Log the URL being fetched
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching JSON data: ${response.status}`);  
    }

    const jsonData = await response.json();
    console.log('JSON data successfully fetched:', jsonData); // Log the fetched data
    return jsonData;
  } catch (error) {
    console.error('Error:', error);
    return null;  
  }
}
console.log("import fetchJSON")
