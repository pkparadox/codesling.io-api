export const addMessageHelper = ({ message }) => {
  return `
      INSERT INTO messages (message)
      VALUES (${message})
      RETURNING message
    `;
}
