//Add a new function to the HTMLElement object so it can be used on any HTMLElement
HTMLElement.prototype.textNodes = function () {
  return [...this.childNodes].filter((node) => {
    return node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "";
  });
};

const emails = [
  {
    id: "mail_aidia",
    name: "luca.angioloni",
    domain: "aidia.it",
  },
  {
    id: "mail_gmail",
    name: "lucaangioloni",
    domain: "gmail.com",
  },
];

emails.forEach((mail) => {
  document.getElementById(mail.id).href = `mailto:${mail.name}@${mail.domain}`;

  // replace text with the email, but leave the img in place using `textNodes()`
  document
    .getElementById(mail.id)
    .textNodes()
    .forEach((node) => {
      node.textContent = `${mail.name}@${mail.domain}`;
    });
});
