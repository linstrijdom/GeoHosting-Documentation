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

# Customising G3W

G3W-SUITE supports customisation of its interface, enabling you to adapt the system to your organisation’s branding and preferences, and improve the user experience.

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    You must be logged in as an administrator to customise your G3W instance.
  </div>
</div>

<br>

## Step 1: Update Site Title

1. Go to the G3W-SUITE <span class="ui-page-label">Administration Panel</span>.

2. Click the <span class="ui-generic-label">Gear</span> icon in the top navigation bar.

3. Under **Configurations**, select <span class="ui-generic-label">Django administration</span>.

4. On Admin page, under **Constance**, click <span class="ui-generic-label">Config</span>.

5. In the <span class="ui-filename">Value</span> field, enter your new site title.

6. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-50.png" alt="Edit Site Title">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

When the page reloads, the website title displayed in the browser tab will update automatically.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-51.png" alt="Old vs. New Site Title">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 2: Update Landing Page Background

1. Go to the G3W-SUITE <span class="ui-page-label">Administration Panel</span>.

2. Click the <span class="ui-generic-label">Gear</span> icon in the top navigation bar.

3. Under **File Manager**, select <span class="ui-generic-label">Files</span>.

4. Navigate to <span class="ui-filename">custom_static/images/home</span>.

    <br>

    <div class="image-with-caption">
    <img src="../../img/g3w-img-52.png" alt="custom_static/images/home folder">
    <div class="caption">
        Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
    </div>
    </div>

    <br>

5. Edit the <span class="ui-filename">images.json</span> to update metadata about the image (e.g. author name, URL).

6. Name your new image <span class="ui-filename">landing.jpeg</span> and upload it.

<br>

<div class="image-with-caption">
<img src="../../img/g3w-img-53.png" alt="images.json">
</div>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    The image name in <span class="ui-filename">images.json</span> must exactly match the name of your background image.
  </div>
</div>

<br>

If no <span class="ui-filename">images.json</span> file is present, G3W-SUITE will automatically use the first image in the directory as the landing-page background.

After uploading, your new background image and author credits should appear on the landing page. If the landing page doesn’t display your updated image:

1. Right-click the page and select <span class="ui-generic-label">Open DevTools</span> / <span class="ui-generic-label">Inspect Element</span>.

2. In the top-bar, open the <span class="ui-generic-label">Network</span> tab.

3. Check <span class="ui-generic-label">Disable cache</span> and reload the page.

4. Uncheck <span class="ui-generic-label">Disable cache</span> and close DevTools.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-54.png" alt="Disable cache">
</div>

<br>

Your G3W-SUITE landing page will now display your new background image, complete with author credit.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-55.png" alt="New Landing Page">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 3: Update Logos

1. Go to the G3W-SUITE <span class="ui-page-label">Administration Panel</span>.

2. Click the <span class="ui-generic-label">Gear</span> icon in the top navigation bar.

3. Under **File Manager**, select <span class="ui-generic-label">Files</span>.

4. Navigate to the <span class="ui-filename">custom_static</span> folder.

5. Replace the following files with your custom versions (keeping the same filenames):

<table class="my-table-style">
  <thead>
    <tr>
      <th>File</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>favicon.ico</td>
      <td>Shown as favicon on the browser tab.</td>
    </tr>
    <tr>
      <td>logo_main.png</td>
      <td>Used when the left sidebar on the admin page is expanded.</td>
    </tr>
    <tr>
      <td>logo_reduced.png</td>
      <td>Used when the left sidebar on the admin page is collapsed.</td>
    </tr>
    <tr>
      <td>logo_login.png</td>
      <td>Used when logging in to the admin page directly (e.g. from the URL) instead of using the landing page.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Maintain the original image dimensions for best visual results. File names must remain identical to ensure the UI displays correctly.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-56.png" alt="custom_static folder">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-57.png" alt="custom_static folder">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 4: Customise Website Styles and Colours

1. Go to the G3W-SUITE <span class="ui-page-label">Administration Panel</span>.

2. Click the <span class="ui-generic-label">Gear</span> icon in the top navigation bar.

3. Under **File Manager**, select <span class="ui-generic-label">Files</span>.

4. Navigate to <span class="ui-filename">custom_static/css</span>.

5. Download <span class="ui-filename">custom.css</span>, edit it locally, and upload your updated version.

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    If you need the original version of these files, you can download them from: https://github.com/kartoza/g3w-admin/tree/GeoHosting/g3w-admin/core/static/custom_static/css
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-58.png" alt="custom_static/css">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>
