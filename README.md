# Web Scraper using Cheerio and Axios

This project is a simple web scraper implemented in Node.js using Cheerio for HTML parsing and Axios for making HTTP requests. The scraper extracts information about countries and their ISO 3166-1 alpha-3 codes from a Wikipedia page.

## Prerequisites

Before running the scraper, ensure you have Node.js installed on your machine.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): For making HTTP requests.
- [cheerio](https://www.npmjs.com/package/cheerio): For HTML parsing.
- [fs](https://nodejs.org/api/fs.html): For interacting with the file system.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/web-scraper-cheerio-axios.git
   ```

2. Navigate to the project directory:

   ```bash
   cd web-scraper-cheerio-axios
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

Run the scraper using the following command:

```bash
node scraper.js
```

The scraper fetches data from the Wikipedia page [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3), extracts information about countries, and saves the data to a file named `countries.json`.

## Project Structure

- `scraper.js`: Main scraper script containing the scraping logic.
- `countries.json`: Output file where scraped data is saved.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.


