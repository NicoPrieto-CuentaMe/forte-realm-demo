---
title: Content Reuse
description: Partials, Markdoc examples, and conditional content in Redocly Realm
---

# Content Reuse

This page demonstrates how Redocly Realm allows you to reuse content across multiple pages.

## Markdoc Example

The Markdoc example tag shows the syntax and the rendered output side by side.

{% markdoc-example %}
{% admonition type="warning" name="Important" %}
This is an important message about this product.
{% /admonition %}
{% /markdoc-example %}

## Conditional Content with If/Else

The following content uses conditional logic to show different messages based on user access:

{% if $rbac.teams %}
{% admonition type="success" name="Authenticated user" %}
You are logged in. You have full access to this documentation.
{% /admonition %}
{% else /%}
{% admonition type="info" name="Guest user" %}
You are viewing this page as a guest. Log in to access additional content.
{% /admonition %}
{% /if %}

## Partial

Partials allow you to write content once and reuse it across multiple pages.
The following is an example of how a partial is used:

```markdoc
{% partial file="/_partials/shared-note.md" /%}
```

In a real project, the file `_partials/shared-note.md` would contain
reusable content that appears on multiple pages — for example, a standard
disclaimer, a shared warning, or a repeated code example.
