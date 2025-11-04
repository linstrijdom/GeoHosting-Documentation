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

# Creating Your Instance

## Checkout Process

Once you've chosen your preferred product, click the <span class="ui-generic-label">Order</span> button beneath the deployment size that best suits your requirements. You’ll be taken to the <span class="ui-page-label">Checkout</span> page, where you’ll:

1. Provide a name for your new hosted product.
2. Specify whether you're purchasing as an individual or on behalf of a company.
3. Enter your coupon code, if you have one.
4. Complete the secure payment process.

<br>

After completing your order, the deployment will begin automatically. You’ll be notified as soon as your product is up and running.

<br>

<div class="image-with-caption">
  <img src="../../img/postgis-img-4.png" alt="Launch Product">
</div>

<br>

## Using the GSH Dashboard

After your hosted product has been successfully deployed, you’ll be redirected to the GSH Dashboard. Here, you can view and manage all your purchased products in one place.

<br>

<div class="image-with-caption">
  <img src="../../img/postgis-img-5.png" alt="Dashboard">
</div>

<br>

### Viewing Product Information

To access detailed information about your hosted product:

1. Click the <span class="ui-generic-label">View Details</span> button under your hosted product.

2. You’ll be taken to the <span class="ui-page-label">Product Details</span> page.

<br>

This page provides several sections:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Section</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Product Information</td>
      <td>Basic product details, URLs, and access credentials.</td>
    </tr>
    <tr>
      <td>Features</td>
      <td>Technical specifications and resource allocation.</td>
    </tr>
    <tr>
      <td>Payment Detail</td>
      <td>Your billing and payment setup.</td>
    </tr>
    <tr>
      <td>Payments</td>
      <td>Records of invoices and transaction history.</td>
    </tr>
    <tr>
      <td>Agreements</td>
      <td>Product-specific terms and conditions.</td>
    </tr>
    <tr>
      <td>Delete Product</td>
      <td>Option to permanently remove your hosted product.</td>
    </tr>
  </tbody>
</table>

<br>

The **Product Information** section displays essential details such as the product type, the product name, and the creation date. It also includes URLs and credentials for both your PostGIS database and pgAdmin interface.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Component</th>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3"><strong>PostGIS</strong></td>
      <td><strong>URL<strong></td>
      <td>Used as the Host when connecting the database to QGIS.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Required for authentication when establishing a connection.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Your database role name (e.g., <span class="ui-filename">kartoza_postgis</span>).</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>pgAdmin</strong></td>
      <td><strong>URL<strong></td>
      <td>Opens the pgAdmin web interface.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Used to log in to pgAdmin.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Your registered email address.</td>
    </tr>
  </tbody>
</table>
<br>

<br>

<div class="image-with-caption">
  <img src="../../img/postgis-img-6.png" alt="Product Page">
</div>

<br>

### Retrieving Login Credentials

You can access and manage your hosted spatial database through the **pgAdmin** web interface. To retrieve your login credentials:

1. Navigate to the <span class="ui-page-label">Product Details</span> page for your hosted product.

2. In the **Product Information** section, locate the <span class="ui-generic-label">pgAdmin</span> link.

3. Click the <span class="ui-generic-label">Get Password</span> button next to it.

4. Your login credentials will be automatically copied to your clipboard.

<br>

### Launching Your Product

To launch pgAdmin, you can either:

1. Click the <span class="ui-generic-label">Product URL</span> link on the <span class="ui-page-label">Product Details</span> page.

2. Click the <span class="ui-generic-label">Product Name</span> on the <span class="ui-page-label">Hosted Products</span> page.

<br>

<div class="image-with-caption">
  <img src="../../img/postgis-img-7.png" alt="Hosted Product" style="width: 40%;">
</div>

<br>

### Deleting Your Product

To permanently remove a hosted product:

1. Go to the <span class="ui-page-label">Product Details</span> page for the product you wish to delete.

2. Scroll to the **Delete Product** section and click <span class="ui-generic-label">Delete this product</span>.

3. Confirm the deletion by entering the product name, then click <span class="ui-generic-label">Delete</span>.

<br>

<div class="alert alert-warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-text">
    Deleting a hosted product is permanent. All associated data will be lost and cannot be recovered.
  </div>
</div>

<br>

---

**Next up:** We’ll walk you through accessing pgAdmin for the first time.

<br>
