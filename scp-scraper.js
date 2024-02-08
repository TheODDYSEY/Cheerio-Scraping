// import required modules 
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// url of the scraped data we want to scrape
const url = "https://scp-wiki.wikidot.com/scp-series";

async function scrapeData() {
  try {
    // use axios to get the HTML from the page
    const { data } = await axios.get(url);
    // load the HTML into cheerio
    const $ = cheerio.load(data);

    // select the list items within the element with class selector "content-panel"
    const listItems = $(".content-panel ul li"); // Corrected selector to target the list items containing SCP entries

    // array o hold the scraped data
    const creatures = [];

    // iterate over each list item
    listItems.each((idx, el) => {
        // create an object to hold the data for each creature
      const creature = { id: "", name: "" };

    //   get the creatures ID from the text of the child anchor tag
      creature.id = $(el).children("a").attr("href"); // Corrected to get the href attribute of the anchor tag

    //   get the creatures name from the text content of the list item
      creature.name = $(el).text().trim(); // Just getting the text content of the list item

    //   add the creature to the array
      creatures.push(creature);
    });

    // log the array to the console
    console.log(creatures);

    fs.writeFileSync(
      "creatures.json",
      JSON.stringify(creatures, null, 2),
      (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      }
    );
  } catch (error) {
    console.log(error);
  }
}

scrapeData();
