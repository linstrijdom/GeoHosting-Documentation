---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
  - Jeff Osundwa
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# Managing Users & Permissions

GeoNode uses a role-based permission system.  Each **resource** (dataset, map, document, etc.) can be shared with:

- **Anyone** (public)
- **Registered Members** (all logged-in users)
- **Specific users or groups**

Four permission levels are available:

| Level   | What it Allows                                                                 |
| ------- | ------------------------------------------------------------------------------ |
| **View**   | View metadata and preview the resource.                                      |
| **Download** | View **and** download the file / layer.                                    |
| **Edit**   | Modify metadata, styles, and attributes (datasets) or map settings (maps).   |
| **Manage** | Full control: update, delete, change share options, publish/unpublish.       |

> **Tip:** Documents have “None” (invisible) instead of “View” as their lowest level.

## Opening the Share Panel

1. Navigate to the resource’s **detail page** and click **Resource → Share** in the top toolbar.

<br>

<div style="text-align: center;">
  <img src="../img/geonode-img-29.png" alt="Share Button" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geonode.org/" target="_blank">GeoNode</a>
  </div>
</div>

<br>

## Setting Permissions

1. In **Share with people and groups**, choose the role for **Anyone** (public) and **Registered Members**.
2. Use the **Add people or groups** box to grant specific roles to individual users or groups.

<br>

<div style="text-align: center;">
  <img src="../img/geonode-img-30.png" alt="Share Permissions" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geonode.org/" target="_blank">GeoNode</a>
  </div>
</div>

<br>

| Example Setting | Result |
| --------------- | ------ |
| **Anyone → View**<br>**Registered Members → View** | Resource is publicly viewable; downloads require direct link or higher role. |
| **Anyone → None**<br>**Registered Members → View** | Resource is hidden from the public but visible to logged-in users. |
| **Specific Group → Manage** | Only members of that group can edit, delete, or republish the resource. |

## Saving Changes

Click **Resources → Save** to apply the new permissions.

<br>

<div style="text-align: center;">
  <img src="../img/geonode-img-31.png" alt="Save Permissions" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geonode.org/" target="_blank">GeoNode</a>
  </div>
</div>

<br>

> **Note:** Administrators can also manage users and groups globally via **/admin** → *People* and *Groups*, but day-to-day sharing is usually handled through each resource’s Share panel.

Mastering these controls lets you publish data widely while protecting sensitive layers and documents.
