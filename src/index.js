import axios from "axios";

const loading = document.querySelector(".loading");
const result = document.querySelector(".result");
const submitButton = document.querySelector(".submit-button");

result.style.display = "none";
loading.style.display = "none";

const form = document.querySelector(".form-data");

const scrapeRecipe = async () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, async (tabs) => {
    const url = tabs[0].url;
    loading.style.display = "block";
    submitButton.style.display = "none";
    await axios.get("http://localhost:8080/save", {
      params: {
        url: url,
      },
    });
    loading.style.display = "none";
    result.style.display = "block";
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  scrapeRecipe();
};

form.addEventListener("submit", (e) => handleSubmit(e));
