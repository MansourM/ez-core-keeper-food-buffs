from scraper import scrape_data, process_scraped_data, generate_js

def main():
    scrape_data()
    process_scraped_data()
    generate_js()

if __name__ == '__main__':
    main()
