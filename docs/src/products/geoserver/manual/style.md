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

# Publishing a Style

In GeoServer, styles determine how your data will be visually represented on the map. By defining a style and linking it to a layer, you control the colors, line widths, fill patterns, and other visual elements that make your data both clear and visually appealing. This step is essential for presenting information in a way that’s easy to interpret and matches your project’s design requirements.

<br>

## Step 1: Access Creation Page

Before you can create a style, you’ll first need to open the style creation interface in GeoServer.

1. In the left-hand menu, under the **Data** section, click <span class="ui-generic-label">Styles</span>.

2. Click <span class="ui-generic-label">Add New Style</span>.

3. The <span class="ui-page-label">New Layer Group</span> page will open.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Styles can be global, which means they can be defined once and applied to layers across different workspaces.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-39.png" alt="Style Page" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 2: Create Style

Now that you’ve accessed the style creation interface, it’s time to define the basic properties and generate an initial style that you can later refine.

1. On the <span class="ui-page-label">New Style</span> page, enter the following details:

     <table class="my-table-style">
     <thead>
     <tr>
          <th>Field</th>
          <th>Value</th>
     </tr>
     </thead>
     <tbody>
     <tr>
          <td>Name</td>
          <td>background</td>
     </tr>
     <tr>
          <td>Workspace</td>
          <td>manual</td>
     </tr>
     <tr>
          <td>Format</td>
          <td>SLD</td>
     </tr>
     </tbody>
     </table>

     <br>

2. Under **Generate a default style**, select <span class="ui-filename">Line</span>.

3. Click <span class="ui-generic-label">Generate...</span>  to automatically populate the style editor with a basic line style outline.

4. Press <span class="ui-generic-label">Apply</span> to save the style. Once saved, additional interactive editing options will become available.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    You can also upload an already-created SLD file if you have one prepared.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-40.png" alt="Create Style" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 3: Edit Style

With your base style created, you can now make adjustments to refine the layer’s appearance.

1. Go to the <span class="ui-page-label">Publishing</span> tab at the top of the page.

2. Enable the **Default** checkbox next to <span class="ui-filename">ne_110m_coastline</span>.

3. Open the <span class="ui-page-label">Layer Preview</span> tab from the top of the page.

4. Modify the style by changing the stroke color to blue (<span class="ui-filename">#004eff</span>) and adjusting the <span class="ui-filename">stroke-width</span>.

    <br>

    ```xml
    <?xml version="1.0" encoding="ISO-8859-1"?>
    <StyledLayerDescriptor version="1.0.0"
      xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
      xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
      xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

      <NamedLayer>
        <Name>background</Name>
        <UserStyle>
          <Title>Background</Title>
          <FeatureTypeStyle>
            <Rule>
              <Title>Background</Title>
              <PolygonSymbolizer>
                <Stroke>
                  <CssParameter name="stroke">#004eff</CssParameter>
                  <CssParameter name="stroke-width">0.25</CssParameter>
                </Stroke>
              </PolygonSymbolizer>
            </Rule>
          </FeatureTypeStyle>
        </UserStyle>
      </NamedLayer>
    </StyledLayerDescriptor>
    ```

    <br>

5. Click <span class="ui-generic-label">Apply</span> to update the style and preview the changes in real time.

6. When satisfied with the result, click <span class="ui-generic-label">Save</span> to finalize your edits.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-41.png" alt="Edit Style" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>
