---
title: Code & Technical
description: Code snippets, code groups, file trees, and diagrams in Redocly Realm
---

# Code & Technical

This page demonstrates the code and technical content types available in Redocly Realm.

## Basic Code Snippet

```javascript
function createTransaction(amount, cardNumber) {
  return fetch('https://api.forte.net/v3/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({ amount, cardNumber })
  });
}
```

## Code Snippet with Title and Highlighted Lines

*Coming soon*

## Code Group — Multiple Languages

{% code-group %}
```js {% title="JavaScript" %}
fetch('https://api.forte.net/v3/transactions')
  .then(response => response.json())
  .then(data => console.log(data));
```
```python {% title="Python" %}
import requests
response = requests.get('https://api.forte.net/v3/transactions')
data = response.json()
print(data)
```
```bash {% title="curl" %}
curl -X GET https://api.forte.net/v3/transactions \
  -H "Authorization: Bearer YOUR_API_KEY"
```
{% /code-group %}

## File Tree

```treeview
forte-realm-demo/
├── docs/
│   ├── code/
│   │   └── code-technical.md
│   ├── visual/
│   │   └── visual-components.md
│   ├── interactive/
│   │   └── interactive-api.md
│   └── reuse/
│       └── content-reuse.md
├── openapi/
│   └── museum.yaml
├── index.md
├── redocly.yaml
└── sidebars.yaml
```

## Diagram

```mermaid
graph TD
    A[Developer] --> B{Forte API}
    B --> C[Create Transaction]
    B --> D[Get Transaction]
    B --> E[Delete Transaction]
    C --> F[Payment Processed]
    D --> G[Transaction Details]
    E --> H[Transaction Deleted]
```

## Code Walkthrough

{% code-walkthrough
  filesets=[
    {
      "files": ["./_filesets/transaction.js"]
    }
  ]
%}

## How to integrate the Forte API

Follow these steps to make your first API call to Forte.

{% step id="setup" heading="Set up credentials" %}
Start by defining your API key and base URL. Store these as constants at the top of your file. Never hardcode your API key in production — use environment variables instead.
{% /step %}

{% step id="payload" heading="Build the payload" %}
Create the transaction payload with the required fields: amount, card number, expiration date, CVV, and currency. All amounts are in USD by default.
{% /step %}

{% step id="request" heading="Send the request" %}
Use the fetch function to send a POST request to the transactions endpoint. Pass your headers and the JSON-encoded payload in the request body.
{% /step %}

{% step id="response" heading="Handle the response" %}
Check the response status. A successful transaction returns a transaction ID. If the request fails, the response includes an error message explaining what went wrong.
{% /step %}

{% /code-walkthrough %}
