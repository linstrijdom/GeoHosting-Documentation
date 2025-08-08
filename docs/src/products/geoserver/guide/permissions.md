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

GeoServer’s security system allows you to control access to your spatial data and services by managing users, groups, and roles. This flexible role-based access control system helps ensure that only authorized users can view, edit, or administer resources on your GeoServer instance.

By assigning roles to users or groups, you control who can access or modify specific layers, services, and functions within GeoServer. This system helps keep your security organized and manageable, especially when many users are involved.

<br>

Users and permissions can be managed from the <span class="ui-page-label">Users, Groups, Roles</span> page under the **Security** section in the left-hand menu. Here you will find separate tabs to manage each component.

<br>

## Defining Roles and Assigning Permissions

Roles define permission sets that specify access rights to services, layers, and other resources. Roles are the core of GeoServer’s authorization model. 

From the <span class="ui-page-label">Roles</span> tab, click <span class="ui-generic-label">Add New Role</span>. Name the role clearly based on its purpose (e.g., “LAYER_EDITOR”, “READ_ONLY_USER”). Click <span class="ui-generic-label">Save</span> to apply the changes.

To assign permissions to the role, navigate to the <span class="ui-page-label">Data</span> page under the **Security** section. Define the specific permissions this role will have and click <span class="ui-generic-label">Save</span> to apply the changes.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-8-1.png" alt="Role Tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Managing Groups

Groups help you manage permissions collectively and for easier bulk management of permissions.

From the <span class="ui-page-label">Users/Groups</span> tab, click <span class="ui-generic-label">Add New Group</span>. Enter a descriptive group name and add available roles. Click <span class="ui-generic-label">Save</span> to apply the changes.

Use groups to assign roles and permissions to multiple users at once, simplifying large-scale user management.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-8-2.png" alt="Groups" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Creating & Editing Users

From the <span class="ui-page-label">Users/Groups</span> tab you can create, edit, and delete individual user accounts.

To create a new user, click <span class="ui-generic-label">Add New User</span> and enter a unique username and a strong password. You can assign the user to one or more groups and roles depending on their access needs, then click <span class="ui-generic-label">Save</span> to apply the changes.

To modify an existing user, select the user from the list, update their details or permissions, and save.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-8-3.png" alt="User Tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

---

**Next up:** Discover how to extend GeoServer's functionality using OGC services.

<br>
