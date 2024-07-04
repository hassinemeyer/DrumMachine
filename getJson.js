export async function fetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching JSON data: ${response.status}`);  
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error:', error);
    return null;  
  }
}
