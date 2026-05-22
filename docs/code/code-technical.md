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