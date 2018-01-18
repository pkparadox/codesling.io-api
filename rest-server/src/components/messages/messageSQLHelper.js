export const addMessageHelper = (body) => {
  console.log('body in addmesshelp', body.message);
  return `
      INSERT INTO messages (message)
      VALUES ('${body.message}')
      RETURNING message
    `;
}

export const getAllMessages = () => {
  return `
    SELECT * FROM messages
  `;
}