# SWAPI

This is a react application which interact with SWAPI to fetch and save the data. 
There will be 2 menus

1. Home
2. Saved

1. Home
-------
    In home menu the data from the SWAPI is fetched with pagination and listed to the user.
    Changing the tab will get latest data form the specified entity. 
    Changing the page number will fetch next and previous data
    On each card there is a save button. On clicking the save button the item will be get added to the saved list
 2. Saved
 --------
    All the saved items from the Home screen is listed in saved page

 3. Not found
 ------------
    For every route except '/' and '/saved' a 404 page not found page is shown
