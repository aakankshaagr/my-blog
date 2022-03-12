# my-blog
1. You are required to create a React application that will periodically (every 10 seconds) poll for new posts from this API: https://hn.algolia.com/api/v1/search_by_date?tags=story&amp;page=0 via a GET request. 
2. New posts fetched after 10 seconds will be added to old posts. 
3. Increase page count in each subsequent get request. 
4. Implement pagination when the list is scrolled.
5. The pagination and periodic request both should work mutually exclusive i.e. for each request page number will be increased. Request with the same page number should never be made twice.
6. Display the title, author URL, created_at, _tags, and author of each post. 
7. Create a search bar so that the user can filter loaded posts by title or author 
8. Upon selecting a row in the list, the user is taken to a new page that displays the raw JSON.
