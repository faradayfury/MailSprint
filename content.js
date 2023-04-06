function getEmailContent() {
  const emailBody = document.querySelector('div[data-message-id]');
  return emailBody ? emailBody.innerText : '';
}
