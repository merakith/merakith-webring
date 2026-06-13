# merakith-webring
Webring for Merakith members

## Joining Webring
1. fork this repo
2. add yourself to members.json
  ie.
  ```json  
  {
    "name": "your site name",
    "url": "https://yoursite.com",
    "owner": "your name"
  }
  ```
3. open a pull request, see [creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## Adding Widget
add the script tag
```js
<script src="https://cdn.jsdelivr.net/gh/merakith/merakith-webring@main/webring.js"></script>
```

place the `merakith-webring` element where you wish to add the widget
ie.
```js
<merakith-webring site="https://yoursite.com"></merakith-webring>
```
