---
title: Text & Structure
description: Basic text formatting and structure elements in Redocly Realm
---

# Text & Structure

This page demonstrates the basic text formatting and structure elements available in Redocly Realm.

## Text Formatting

**Bold text** is used for important terms.

*Italic text* is used for emphasis.

~~Strikethrough text~~ is used for deprecated content.

`Inline code` is used for short code references.

> Blockquotes are used for callouts and emphasis. This is an example of a blockquote that spans multiple lines.

## Headings

# Heading 1
## Heading 2
### Heading 3

## Lists

**Unordered list:**
- Item one
- Item two
- Item three
  - Nested item
  - Another nested item

**Ordered list:**
1. First step
2. Second step
3. Third step

## Links

[Internal link to Code & Technical](code/code-technical.md)

[External link to Redocly](https://redocly.com)

## Tables

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /transactions | Returns a list of transactions |
| POST | /transactions | Creates a new transaction |
| GET | /transactions/{id} | Returns a single transaction |
| DELETE | /transactions/{id} | Deletes a transaction |

## Images

![Redocly Logo](https://redocly.com/assets/redocly-white-logo.176e3e2d646a542bdc2590ae497b3b8ee3825605652af49b8790ab9e7a26335d.9c1bb791.svg)

## Markdoc Table

Unlike standard Markdown tables, Markdoc tables support rich content inside cells — including code, admonitions, and lists.

{% table %}
* Content Type
* Example inside a cell
* Available in standard Markdown tables?
---
* Code snippet
*
```javascript
  fetch('https://api.forte.net/v3/transactions', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
  });
```
* No
---
* Admonition
*
  {% admonition type="warning" name="Important" %}
  Always use sandbox credentials when testing. Never use live API keys in development.
  {% /admonition %}
* No
---
* List
*
  Supported payment methods:

  - Credit card
  - Debit card
  - ACH / Bank transfer
  - Digital wallets
* Partial
---
* Plain text
* Standard text content works the same as in regular Markdown tables.
* Yes
{% /table %}
