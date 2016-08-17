# Scratcher

## Project purpose

As part of EDA's 9 development bootcamp we are encouraged to come up with a website or application idea and build it on our own, using both our existing knowledge of development technologies/pricipals, and new ones.

The project could be serious or for fun and be at any stage of completion, but we had to present our product in whatever state it was and explain it's intended purpose/what problem it solved, the technologies it used, why we had used them rather than others, how we went about creating it, a small demonstration and what our perceived future plans are.

## Learning objectives
### (What do I want to get better at?)

Servers, rendering with templates, using databases and APIs. I want to do something that incorporates aspects of all these things. If appropriate, I would also like to use a new framework and/or see how I can include npm modules I haven't used.

___

## Description
### (A description of your project.)

A tinder-esk app except intended for users looking for a new furry SPCA friend. Users would set up a profile and be shown a series of adorable potential pets based on a few filters (eg; dog, black lab, age<1 yr). The user could swipe left or right depending on what they thought of the pet's "profile" (which would include a few photos, their name, a quick description or story about them and their personality, maybe an indication of their cost, their age and where they are located) and the ones they liked would be saved to a shortlist on the user's profile. The app could then keep the user informed of how their potential pet is tracking, how many others have shortlisted them, and if they're still available for adoption.
Outside of this there could also be tips on how to take proper care of your animal, what to feed them, helping them adjust to their new home etc.

___

## GitHub repository

Link to the repo (very important).

[I'm a link to Cam's personal project repo](https://github.com/cam-shotter/react-personal-project)

___

## Technologies

What technologies are you using?

One of my learning objective was to get better at incorporating servers, however that was before I fully knew about client-side rendering and it's advantages in a project like this. So I am using a Slushify Generator.

Another goal was to incorporate APIs but SPCA Wellington doesn't have one, so I have been forced to get creative and have instead gone the extra step and created a webscraper to get data. This involved using Cheerio and SuperAgent.

For database I wanted to get more familiar with Knex but thought there were better alternatives to SQLite3, so for the moment PostgresQL seems like the way to go.

React
Watchify/Browserify



___

## Milestones

### MVP 1
  * A site that shows the user a database of animals and allows them to save the ones they like.

### Stretch Goals
  * Users have a profile that stores their data between sessions allowing them to pick up where they left off.
  * The animal database is pulled from SPCA website, either through an API, a .csv file or a web scraper.
  * The user is able to search through animals using different filters eg: dogs, cats, small animals etc; and display them in a variety of ways eg: alphebetical, colour etc.
  * The user is able to keep track on the animals they have saved and see key details like vaccination/microchip status, profile views, how long they've been there etc.


### What are the timings of your milestones?
