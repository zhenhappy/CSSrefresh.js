# CSSrefresh.js

## WHAT?
CSSrefresh is a small, unobstructive javascript file that monitors the CSS-files included in your webpage. As soon as you save a CSS-file, the changes are directly implemented, without having to refresh your browser.

## WHY?
When you're coding a website, nothing can be more frustrating than having to switch from the texteditor to the browser over and over again, just for small changes to occur. With CSSrefresh installed, all the included stylesheets are automatically refreshed directly after you save them.

## HOW?
Using CSSrefresh is easy. You can either include the javascript-file in your webpage, or use the bookmarklet that can be found on http://cssrefresh.frebsite.nl/#how .

### Get the script
Download the file: CSSrefresh.js
and include it in your webpage:

```html
<head>
   <link rel="stylesheet" type="text/css" href="css/site.css" />
   <script type="text/javascript" src="js/cssrefresh.js"></script>
</head>
```

Note: Only CSS-files included before the CSSrefresh-file will be refreshed.
