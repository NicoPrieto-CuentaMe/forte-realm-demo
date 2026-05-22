---
title: Visual Components
description: Cards, admonitions, images, and icons in Redocly Realm
---

# Visual Components

This page demonstrates the visual components available in Redocly Realm.

## Admonitions

{% admonition type="info" name="Info" %}
This is an informational message. Use it to provide helpful context to the reader.
{% /admonition %}

{% admonition type="warning" name="Warning" %}
This is a warning message. Use it to alert the reader about something important.
{% /admonition %}

{% admonition type="danger" name="Danger" %}
This is a danger message. Use it to warn the reader about something critical.
{% /admonition %}

{% admonition type="success" name="Success" %}
This is a success message. Use it to confirm that something worked correctly.
{% /admonition %}

## Cards

{% cards %}
{% card title="REST API" icon="code" to="../interactive/interactive-api.md" %}
Explore the interactive API reference with live request capabilities.
{% /card %}
{% card title="Code Examples" icon="file" to="../code/code-technical.md" %}
Browse code snippets and examples in multiple programming languages.
{% /card %}
{% card title="Content Reuse" icon="copy" to="../reuse/content-reuse.md" %}
Learn how to reuse content across multiple pages with partials.
{% /card %}
{% /cards %}

## Image with Lightbox

{% img src="https://redocly.com/assets/redocly-card.f670aae34a39545a5ea633a540cb3a4a333a1f23bb2ed3c4a1b17a5fbcf0ac85.db81178d.png" alt="Redocly Demo" withLightbox=true /%}

## Icons

{% icon name="star" /%} Featured content

{% icon name="warning" color="orange" /%} Important note

{% icon name="check" color="green" /%} Verified information

{% icon name="code" color="blue" /%} Code reference
