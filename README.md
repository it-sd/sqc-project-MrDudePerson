# GIF Journal

Author: jgreen41
--------

[GIF Journal Render site link](https://gif-journal.onrender.com)

Abstract
========
Ever feel like you'd like to keep a daily journal, but you don't want to write a description of your thoughts/feelings?

That's where the GIF Journal comes in. I envision the ability to choose a GIF that represents your thoughts/feelings, and then store the URL for that GIF inside a database for each day that you've submitted.

Endpoints
=========
The endpoints that I anticipate to use are:

[Trending Endpoint](https://developers.giphy.com/docs/api/endpoint/#trending)

[Search Endpoint](https://developers.giphy.com/docs/api/endpoint/#search)

Tables
======
Thinking ahead, the two tables that I could use in my database could be journalEntry and journalGIF. The journalEntry table would hold information about when the journal entry was created, who created it, and would also hold a reference to the journalGIF table that would be responsible for storing the URL for the chosen GIF for the associated journal entry.
