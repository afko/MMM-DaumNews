# This is python file for Daum News crawling
#
# Written by Sungje Kim

import json
from selenium import webdriver

def toJson(news_dict):
    with open('news.json', 'w', encoding='utf-8') as file :
        json.dump(news_dict, file, ensure_ascii=False, indent='\t')

chrome = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver")
chrome.implicitly_wait(10)
chrome.get("https://media.daum.net/ranking/kkomkkom/")
chrome.implicitly_wait(3)

temp_dict = {}

for i in range(1, 11):
    num= i
    title= chrome.find_element_by_xpath('//*[@id="mArticle"]/div[2]/ul[3]/li['+str(i)+']/div[2]/strong/a').text
    link= chrome.find_element_by_xpath('//*[@id="mArticle"]/div[2]/ul[3]/li['+str(i)+']/div[2]/strong/a').get_attribute('href')
    info_news= chrome.find_element_by_xpath('//*[@id="mArticle"]/div[2]/ul[3]/li['+str(i)+']/div[2]/strong/span').text
    temp_dict[i] = {'title': title, 'info_news':info_news, 'link':link}
    
toJson(temp_dict)

chrome.close();