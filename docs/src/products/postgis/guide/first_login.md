---
title: Documentation
summary: GeoSpatialHosting Documentation
author: Lindie Strijdom
date: 2025-10-01
some_url: https://github.com/kartoza/GeoHosting-Documentation.git
copyright: Copyright 2025, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
---

# First Log In & Setting Your Password

## Accessing pgAdmin

To begin using your hosted database, go to the <span class="ui-page-label">Hosted Products</span> section of the GSH Dashboard. From there, click the <span class="ui-generic-label">Product Name</span> you selected during setup.

You can also access pgAdmin directly using the unique URL, which is listed on the <span class="ui-page-label">Product Details</span> page in the dashboard.

<br>

<div class="image-with-caption">
  <img src="../../img/postgis-img-8.png" alt="pgAdmin Login">
  <div class="caption">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Logging In

To begin working with your hosted database, log in to pgAdmin using the credentials you retrieved from the GSH Dashboard.

On the pgAdmin <span class="ui-page-label">Login</span> page, enter your **Username** (your registered email address) and **Password** (copied from the GSH Dashboard), then click <span class="ui-generic-label">Login</span> to continue.

<br>

Once logged in, the pgAdmin interface displays a clean workspace consisting of three main areas:

- The **Menu Bar** at the top
- The **Object Explorer** tree on the left
- The **Tabbed Browser** on the right

<br>

<div class="image-with-caption">
  <img src="../../img/postgis-img-9.png" alt="pgAdmin Interface">
  <div class="caption">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Changing Your Password

After your first login, it’s strongly recommended that you update your default password to keep your database secure.

1. In the **Object Explorer**, expand the <span class="ui-generic-label">Geospatialhosting Databases</span> group. 

2. Locate your server, it will have the same name as your hosted product.

3. Expand <span class="ui-generic-label">Login/Group Roles</span>.

4. Right-click <span class="ui-filename">kartoza_postgis</span>, and select <span class="ui-generic-label">Properties</span>. 

5. Under the **Definition** tab, enter your new password in the <span class="ui-filename">Password</span> field. 

6. Click <span class="ui-generic-label">Save</span> to confirm your changes.

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Choose a strong, unique password and store it securely.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/postgis-img-10.png" alt="Login/Group Roles">
  <div class="caption">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

---

**Next up:** A quick 5-minute Getting Started guide to help you get started using your database.

<br>
