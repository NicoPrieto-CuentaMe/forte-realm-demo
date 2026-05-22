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

```javascript {% title="transaction.js" highlight="{3,4}" %}
function processPayment(amount, cardNumber) {
  const payload = {
    amount: amount,
    card_number: cardNumber,
    currency: 'USD'
  };
  return fetch('https://api.forte.net/v3/transactions', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}
```

## Code Group — Multiple Languages

{% code-group %}
{% code title="JavaScript" lang="javascript" %}
fetch('https://api.forte.net/v3/transactions')
  .then(response => response.json())
  .then(data => console.log(data));
{% /code %}
{% code title="Python" lang="python" %}
import requests
response = requests.get('https://api.forte.net/v3/transactions')
data = response.json()
print(data)
{% /code %}
{% code title="curl" lang="bash" %}
curl -X GET https://api.forte.net/v3/transactions \
  -H "Authorization: Bearer YOUR_API_KEY"
{% /code %}
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

{% code-walkthrough %}
{% step title="Set up the request" %}
Start by defining the API endpoint and your authentication headers.
{% /step %}
{% step title="Build the payload" %}
Create the transaction payload with the required fields: amount and card number.
{% /step %}
{% step title="Send the request" %}
Use fetch or your preferred HTTP client to send the POST request to the Forte API.
{% /step %}
{% step title="Handle the response" %}
Check the response status and handle both success and error cases accordingly.
{% /step %}
{% /code-walkthrough %}

