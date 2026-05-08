---
title: "KitterChord KitterTabs"
layout: archive
permalink: /tabs/
entries_layout: list # You can change this to 'list' if you prefer
---

<!-- insert short how to read kitterchord tab guide here with pictures etc -->

[this page is under development, it's a collection of tabs for the kitterchord orb]

<div class="entries-{{ page.entries_layout }}">
  {% for post in site.tabs %}
    {% include archive-single.html type=page.entries_layout %}
  {% endfor %}
</div>