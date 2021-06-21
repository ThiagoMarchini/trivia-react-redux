export default async function getCategories() {
  return fetch('https://opentdb.com/api_category.php')
    .then((response) => response.json())
    .catch((error) => error);
}
