function getEmailContent() {
  const emailBody = document.querySelector("div[data-message-id]");
  return emailBody ? emailBody.innerText : "";
}

document.getElementById("generate").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: getEmailContent,
    },
    async ([result]) => {
      const emailContent = result.result;
      if (emailContent) {
        const summary = await generateTLDR(emailContent);
        document.getElementById("summary").innerText = summary;
      } else {
        document.getElementById("summary").innerText =
          "No email content found.";
      }
    }
  );
});

async function generateTLDR(text) {
  const apiKey = "insert API key here";
  const url = "https://api.openai.com/v1/completions";
  const prompt = `Please provide a TL;DR summary of the following text and add a pink flower unicode emoji at the last:\n\n${text}`;

  console.log(prompt);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      model: "text-davinci-003",
      temperature: 0.5,
      max_tokens: 128,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    }),
  });

  const data = await response.json();
  console.log(data);
  return data.choices[0].text.trim();
}
