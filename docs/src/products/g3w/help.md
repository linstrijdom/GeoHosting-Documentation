---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# G3W Help

## Troubleshooting Common Issues

<details class="faq-item">
  <summary>Why can’t I see any layers in the WebGIS?</summary>
  <div class="faq-answer">
    Your project might not be published or added to a Macro Group.  
    <br><br>
    <strong>Fix:</strong> Make sure your QGIS project is published and assigned to an active Macro Group in the admin panel.
  </div>
</details>

<details class="faq-item">
  <summary>Why is the map blank or slow to load?</summary>
  <div class="faq-answer">
    This could be due to missing base layers or unsupported CRS settings.  
    <br><br>
    <strong>Fix:</strong> Ensure a valid base layer like OSM is set and your QGIS project is using the correct coordinate system.
  </div>
</details>

<details class="faq-item">
  <summary>My changes in QGIS are not reflected in G3W-SUITE</summary>
  <div class="faq-answer">
    Updating the project file alone doesn't update the published version.  
    <br><br>
    <strong>Fix:</strong> Re-publish the updated QGIS project and restart the G3W-SUITE services if needed.
  </div>
</details>

<details class="faq-item">
  <summary>The popup information doesn’t display correctly</summary>
  <div class="faq-answer">
    Field aliases or HTML formatting issues may cause this.  
    <br><br>
    <strong>Fix:</strong> Use the QGIS "Identify" tool to verify field names and ensure the HTML popup template is well-formed.
  </div>
</details>

<details class="faq-item">
  <summary>I get an error when trying to save edits in the WebGIS</summary>
  <div class="faq-answer">
    Your user role may not have editing permissions, or the database connection is misconfigured.  
    <br><br>
    <strong>Fix:</strong> Check that your user role allows editing, and verify the editing settings in the admin interface.
  </div>
</details>

<details class="faq-item">
  <summary>Why aren’t my symbology settings preserved?</summary>
  <div class="faq-answer">
    G3W-SUITE supports most but not all QGIS symbology features.  
    <br><br>
    <strong>Fix:</strong> Use simple categorized or rule-based styles, and avoid complex symbol layers.
  </div>
</details>

<details class="faq-item">
  <summary>My labels are missing or cut off</summary>
  <div class="faq-answer">
    Label rendering may be affected by scale or layer settings.  
    <br><br>
    <strong>Fix:</strong> Adjust label settings in QGIS to use scale-based visibility, and check layer order and priority.
  </div>
</details>

<details class="faq-item">
  <summary>Why can't I create a new Macro Group?</summary>
  <div class="faq-answer">
    Only administrators can create Macro Groups.  
    <br><br>
    <strong>Fix:</strong> Contact a G3W admin or ensure your user role has the correct permissions.
  </div>
</details>

<details class="faq-item">
  <summary>The base map doesn’t appear in the viewer</summary>
  <div class="faq-answer">
    This may be due to missing URL or projection mismatch.  
    <br><br>
    <strong>Fix:</strong> Make sure the base map URL is valid and matches the WebGIS projection (EPSG:4326 recommended).
  </div>
</details>

<details class="faq-item">
  <summary>I get a “project not found” error when trying to view a service</summary>
  <div class="faq-answer">
    The QGIS project may not be published correctly or the path is wrong.  
    <br><br>
    <strong>Fix:</strong> Check that the project is saved in the correct directory and published in the admin panel.
  </div>
</details>

<br>

## Frequently Asked Questions (FAQ)

<details class="faq-item">
  <summary>Can I use my own PostGIS database?</summary>
  <div class="faq-answer">
    Yes. G3W-SUITE supports multiple database types including PostGIS. You can configure connections in the admin interface.
  </div>
</details>

<details class="faq-item">
  <summary>Does G3W-SUITE support editing from the browser?</summary>
  <div class="faq-answer">
    Yes. Editing tools can be activated for specific layers and user roles. Make sure you configure edit permissions correctly.
  </div>
</details>

<details class="faq-item">
  <summary>Can I use a custom domain for my G3W instance?</summary>
  <div class="faq-answer">
    Yes, with the appropriate server configuration and domain settings. Contact your system administrator or hosting provider.
  </div>
</details>

<details class="faq-item">
  <summary>What’s the best projection to use?</summary>
  <div class="faq-answer">
    EPSG:4326 is recommended for compatibility with most web mapping tools and base maps.
  </div>
</details>

<details class="faq-item">
  <summary>Can I disable certain tools for some users?</summary>
  <div class="faq-answer">
    Yes. Use the role-based configuration in the admin panel to control which widgets, tools, and services are available per user group.
  </div>
</details>

<details class="faq-item">
  <summary>Is it possible to embed the map in another website?</summary>
  <div class="faq-answer">
    Yes. G3W-SUITE provides iframe embedding support for public WebGIS projects.
  </div>
</details>

<details class="faq-item">
  <summary>How do I localize the G3W interface?</summary>
  <div class="faq-answer">
    G3W-SUITE supports multiple languages. You can set the default language per user or browser locale.
  </div>
</details>

<details class="faq-item">
  <summary>What file types can I use for vector layers?</summary>
  <div class="faq-answer">
    QGIS supports a wide range of vector formats like Shapefile, GeoPackage, SpatiaLite, and PostGIS — all of which are compatible with G3W-SUITE.
  </div>
</details>

<details class="faq-item">
  <summary>Can I back up or export my WebGIS projects?</summary>
  <div class="faq-answer">
    Not directly through the interface, but you can back up QGIS projects, database files, and G3W config manually from the server.
  </div>
</details>

<details class="faq-item">
  <summary>Is there an audit log or activity tracker?</summary>
  <div class="faq-answer">
    G3W-SUITE includes basic logging features for some operations. For full audit tracking, consider using additional server tools.
  </div>
</details>

## Getting Support

If you run into an issue or need assistance, the best place to start is the **[Support Center](https://kartoza.github.io/GeoHosting-Documentation/users/support_center/)** page in the **Users** section.

There, you’ll find clear instructions on how to log a support ticket, including what information to provide so the team can assist you efficiently.

By using the official support system, your request will be properly tracked and routed to the right people, helping you get a faster and more accurate response.

<br>
