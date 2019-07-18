# Useful_Plants Database

## Environment Setup
DB: https://cloud.mongodb.com/v2/5d1ce27aff7a250460751af8#clusters  
Express/Mongoose Tutorial: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose  
Express/Mongoose Tutorial: https://codeburst.io/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073  

## Data Sources and Documentation
Wiki documentation: https://dijs.github.io/wiki/  
USDA Plants list (CSV): https://plants.sc.egov.usda.gov/dl_all.html  
[plant-data-example.csv](https://github.com/simgooder/useful_plants/blob/master/plant-data-example.csv)  


---


## TODO 

- Create basic CRUDs to write to Database
  - Should we just create a form to create entries and represent all the data?
  - Should we just create an editable entry for each plant?
- Each time a new entry is created, automate the Wikipedia API to pull in an `image`, `names` and `summary` 
- Revise and edit Schema
  - Write out some use-cases, example interfaces, etc to base the schema on
- Create CRUDs to read from Database
