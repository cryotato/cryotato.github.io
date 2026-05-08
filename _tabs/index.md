---
title: "KitterChord KitterTabs"
layout: archive
permalink: /tabs/
entries_layout: list # You can change this to 'list' if you prefer
---

<div class="entries-{{ page.entries_layout }}">
  {% for post in site.tabs %}
    {% include archive-single.html type=page.entries_layout %}
  {% endfor %}
</div>