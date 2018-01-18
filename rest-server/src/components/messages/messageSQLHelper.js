export const addMessageHelper = (body) => {
  console.log('body in addmesshelp', body);
  return `
      INSERT INTO messages (message, username)
      VALUES ('${body.message}', '${body.username}')
      RETURNING message, username
    `;
}

export const getAllMessages = () => {
  return `
    SELECT 
      * 
    FROM 
      messages
    ORDER BY
      id DESC
  `;
}
export const deleteAllMessagesHelper = () => {
  return `
    TRUNCATE messages
  `;
}