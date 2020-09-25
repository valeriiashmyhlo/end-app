export const handleResponse = async res => {
  if (res.ok) {
    const result = await res.text();
    return result ? JSON.parse(result) : {};
  }
  throw await res.json();
};
