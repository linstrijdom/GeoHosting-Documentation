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

This tutorial walks through the steps of defining a style and associating it with a layer for use.

<br>

Before we can create a style, we need to ensure the required data is available.

<br>

Complete the following previous section to prepare the necessary layer:

- [Publishing a Layer: Try it Yourself](https://kartoza.github.io/GeoHosting/products/geoserver/guide/#try-it-yourself) — defines the `tutorial:Countries` layer.

---

## Creating a style

1. Navigate to **Data → Style** page.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-50.png" alt="Styles" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

2. This page lists existing styles, along with their associated workspaces.

      > **Note:** Styles can be *global*, which means they can be defined once and applied to layers across different workspaces.

      <br>

3. At the top of the Styles list, click the Add a new style link.

      <br>

4. Under Style Data, complete the form with the following details:

      | Field      | Value          |
      |------------|----------------|
      | Name       | `background`   |
      | Workspace  | `tutorial`     |
      | Format     | `SLD`          |

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-51.png" alt="Style Data" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

5. Next, locate Style Content and under Generate a default style, select `Polygon`.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-52.png" alt="Style Content" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

6. Click the Generate link to automatically populate the style editor with a basic polygon style outline.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-53.png" alt="Generate" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

7. Press Apply to save and define this style. Once saved, additional interactive editing options will become available.

      <br>

8. Scroll to the top and go to the Publishing tab.

      <br>

9. Use the search field to filter by `tutorial` and locate the `tutorial:countries` layer.

      <br>

10. Check the **Default** checkbox next to `tutorial:countries` to set the `tutorial:background` style as the default for this layer.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-54.png" alt="Default Style" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

11. Go to the Layer Preview tab. Under Preview on layer, click the link for `tutorial:countries` to use this dataset while editing the style.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-55.png" alt="Layer Preview" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

12. Edit your style by inserting a `fill-opacity` value of `0.25` to make the fill semi-transparent.

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
                  <Fill>
                    <CssParameter name="fill">#444433</CssParameter>
                    <CssParameter name="fill-opacity">0.25</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
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

13. Press **Apply** to update the style and observe the visual change in the layer preview.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-56.png" alt="Changed Layer Preview" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

You have now succesfully defined a style and associating it with a layer.
