 ---
title: Content Reuse
description: Partials, Markdoc examples, and conditional content in Redocly Realm
---

# Content Reuse

This page demonstrates how Redocly Realm allows you to reuse content across multiple pages.

## Markdoc Example

The Markdoc example tag shows the syntax and the rendered output side by side.

{% markdoc-example %}
```markdown
{% admonition type="warning" name="Important" %}
This is an important message about this product.
{% /admonition %}
```
{% /markdoc-example %}

## Conditional Content with If/Else

The following content uses conditional logic to show different messages:

{% if true %}
{% admonition type="success" name="Condition met" %}
This content is visible because the condition is true.
{% /admonition %}
{% else %}
{% admonition type="danger" name="Condition not met" %}
This content would show if the condition were false.
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

