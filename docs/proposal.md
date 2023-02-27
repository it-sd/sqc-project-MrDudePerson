GIF Journal
===========

Ever feel like you'd like to keep a daily journal, but you don't want to write a description of your thoughts/feelings? When thinking about an API integration that I could create, my first idea was to use GIFs in one way or another. GIFs are a fun and simple way to convey an idea.

That's where the GIF Journal comes in. I envision the ability to choose a GIF that represents your thoughts/feelings, and then store the URL for that GIF inside a database for each entry that the user has submitted. GIPHY is a powerful GIF library that is utilized very frequently across many platforms.

Web service
-----------
[GIPHY](https://developers.giphy.com/docs/api/#quick-start-guide) apiKey

* https://developers.giphy.com/docs/api/endpoint#trending
* https://developers.giphy.com/docs/api/endpoint#search

Database use
------------
Found in [this documentation](https://developers.giphy.com/docs/api/schema/), the GIF Object seems to contain the data that I'll want to write into the database. The property 'url: string' contains the unique URL for the chosen GIF, which I plan to insert into the journalGIF table as a 'gifURL' value. The other value that I will write into the journalGIF table will be entryID (as a Foreign Key).

The other table will be journalEntry. This table will contain the Name of the user, the date that the record was inserted, and an entryID value (Primary Key) which will auto-increment. The entryID value will link the journalEntry and journalGIF tables together.

Initial designs
---------------

![Journal Page Sample Layout](https://github.com/it-sd/sqc-project-MrDudePerson/blob/main/docs/gifJournalPage.png "Journal Page Sample Layout")

![About Page Sample Layout](https://github.com/it-sd/sqc-project-MrDudePerson/blob/main/docs/gifAboutPage.png "About Page Sample Layout")

![GIF Journal website functionality path](https://github.com/it-sd/sqc-project-MrDudePerson/blob/main/docs/sqc-project-LucidChart.png "GIF Journal Website Functionality Path")
