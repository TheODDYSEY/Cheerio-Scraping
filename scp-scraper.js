// import required modules 
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// url of the scraped data we want to scrape
const url = "https://scp-wiki.wikidot.com/scp-series";

async function scrapeData() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const listItems = $(".content-panel ul li"); // Corrected selector to target the list items containing SCP entries

    const creatures = [];

    listItems.each((idx, el) => {
      const creature = { id: "", name: "" };

      creature.id = $(el).children("a").attr("href"); // Corrected to get the href attribute of the anchor tag
      creature.name = $(el).text().trim(); // Just getting the text content of the list item

      creatures.push(creature);
    });

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
