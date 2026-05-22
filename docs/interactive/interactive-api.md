---
title: Interactive & API
description: Tabs, Replay OpenAPI, JSON Schema, and API samples in Redocly Realm
---

# Interactive & API

This page demonstrates the interactive and API content types available in Redocly Realm.

## Tabs

{% tabs %}
{% tab label="Merchants" %}
Merchants use the Forte API to process payments directly from their customers.

Key endpoints:
- `POST /transactions` — Create a new transaction
- `GET /transactions/{id}` — Get transaction details
- `DELETE /transactions/{id}` — Cancel a transaction
{% /tab %}
{% tab label="Partners" %}
Partners use the Forte API to manage multiple merchant accounts under one integration.

Key endpoints:
- `GET /organizations` — List all organizations
- `POST /organizations` — Create a new organization
- `GET /organizations/{id}` — Get organization details
{% /tab %}
{% tab label="Corporate" %}
Corporate users manage the full Forte platform including users, permissions, and reporting.

Key endpoints:
- `GET /users` — List all users
- `POST /users` — Create a new user
- `GET /reports` — Access reporting data
{% /tab %}
{% /tabs %}

## JSON Schema

{% json-schema schema={
  "type": "object",
  "properties": {
    "transaction_id": {
      "type": "string",
      "description": "Unique identifier for the transaction.",
      "example": "trn_123456789"
    },
    "amount": {
      "type": "number",
      "description": "Transaction amount in USD.",
      "example": 100.00
    },
    "status": {
      "type": "string",
      "description": "Current status of the transaction.",
      "enum": ["pending", "approved", "declined", "cancelled"]
    },
    "created_at": {
      "type": "string",
      "format": "date-time",
      "description": "Timestamp when the transaction was created."
    }
  }
} /%}

## OpenAPI Code Sample

{% openapi-code-sample
  descriptionFile="../../openapi/museum.yaml"
  operationId="buyMuseumTickets"
  lang="curl" /%}

## OpenAPI Response Sample

{% openapi-response-sample
  descriptionFile="../../openapi/museum.yaml"
  operationId="buyMuseumTickets" /%}

## Replay OpenAPI

{% replay-openapi
  descriptionFile="../../openapi/museum.yaml"
  operationId="getMuseumHours" /%}