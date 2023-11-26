// Loading the dependencies, but we don't need 'pretty'
// since we won't be logging HTML to the terminal.
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// URL of the page we want to scrape
const url = "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3";

// Async function that performs the actual scraping
async function scrapeData() {
  try {
    // Fetch HTML content of the page
    const { data } = await axios.get(url);

    // Load the HTML content that we previously fetched
    const $ = cheerio.load(data);

    // Select all of the list items in the 'plainlist' class
    const listItems = $(".plainlist ul li");

    // Create an array to store the final result
    const countries = [];

    // Use the .each method to iterate through the 'li' elements
    listItems.each((idx, el) => {
      // Object to store the names of countries and their ISO codes
      const country = { name: "", iso3: "" };

      // Fetch the text from 'a' and 'span' elements, and save it to the above object
      country.name = $(el).children("a").text();
      country.iso3 = $(el).children("span").text();

      countries.push(country);
    });

    // Display countries array to the console
    console.dir(countries);

    // Save the data in the 'countries' array to a file 'countries.json'
    fs.writeFile("countries.json", JSON.stringify(countries, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Successfully data written to the file!");
    });
  } catch (err) {
    console.error(err);
  }
}

scrapeData();