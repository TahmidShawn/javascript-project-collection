# SPA Journey (Vanilla JS) — Step by Step

This is a simple breakdown of how we move from a normal multi-page website to a single-page app (SPA). Each step shows what we tried, what broke, and how we fixed it.

---

## 1. Traditional Website (MPA)

### What we did:

```html
<a href="./shop.html">Shop</a>
```

### What happens:

- Browser loads a new HTML page
- Everything reloads from scratch

### Flow:

```
home.html → request → shop.html
```

### Problem:

- Full page reload every time
- Feels slow
- Not smooth

---

## 2. SPA Idea

### What we changed:

```html
<div id="app"></div>
```

### Idea:

- Only one HTML file
- JavaScript changes what is shown

### Flow:

```
One page + JS updates content
```

### Fix:

- No reload
- Faster navigation

---

## 3. First SPA Attempt (innerHTML)

### Example:

```js
app.innerHTML = `<h1>Home</h1>`;
```

### Problem:

- HTML inside JS becomes messy
- Hard to manage when project grows

---

## 4. Better Structure (Fetch HTML)

### Solution:

```js
fetch("./home.html");
```

### Flow:

```
JS → loads HTML file → puts inside #app
```

### Fix:

- HTML separated from JS
- Easier to manage

### Still missing:

- Navigation system

---

## 5. Navigation Problem

### Example:

```html
<a href="shop.html"></a>
```

### What happens:

- Browser reloads page again

### Problem:

- SPA idea breaks here

---

## 6. Fix Navigation (preventDefault)

### Solution:

```js
e.preventDefault();
```

### Flow:

```
Click → stop browser reload → JS handles page switch
```

### Fix:

- No reload anymore

### New problem:

- URL does not change

---

## 7. URL Problem

### Issue:

- URL stays same

### Problems:

- Cannot bookmark page
- Cannot share link
- Back button does not work properly

---

## 8. Fix URL (History API)

### Solution:

```js
history.pushState({}, "", "/shop");
```

### Flow:

```
URL changes without reload
```

### Fix:

- Clean navigation experience

### New problem:

- Refresh breaks the page

---

## 9. Refresh Problem (Cannot GET /shop)

### What happens:

```
GET /shop
```

### Server behavior:

- Looks for real file/folder `/shop`

### Problem:

- Route does not exist on server

---

## 10. Fix Option 1 — Hash Routing

### URL format:

```
#/shop
```

### Why it works:

- Server ignores everything after `#`

### Fix:

- Works on refresh
- No server setup needed

### Downside:

- URL looks less clean

---

## 11. Fix Option 2 — History Routing

### URL format:

```
/shop
```

### Requirement:

- Server must always return `index.html`

### Flow:

```
Server → index.html → JS decides page
```

### Fix:

- Clean URLs
- Real SPA behavior

### Downside:

- Needs server configuration

---

## 12. Route Handling

### What we added:

- Read current URL
- Show correct page
- Listen for changes

### Events used:

- click (navigation)
- hashchange / popstate (URL change)
- page load (initial render)

---

## Final Result

- No page reload
- Content changes dynamically
- URL stays in sync
- Back/forward works
- Pages can be shared (with proper routing)

---

## Big Picture

```
MPA → reload every click (simple but slow)
SPA → JS handles navigation (smooth but complex)
Routing → connects URL with UI
Server config → makes clean URLs possible
```
