# AccessGenie

AccessGenie is a permission management service that helps clients build and maintain applications with fully customizable roles and permissions. With our creative new approach, apps can retrieve secure user permissions with a simple API call. Then, through our web application, the development team or project manager can manage existing roles, add team members, and create new roles with different permissions, all without changing a single line of code.

## The Problem

Suppose your company, like many others, has numerous internal tools; most of which contain sensitive information or safety-critical features that require granular levels of access. A one-size-fits all admin role won’t be adequate, and hard-coding more specific roles into each app is incredibly time (and resource) consuming, especially once an application has entered a longer-term maintenance period, where major modifications can have expensive consequences.

AccessGenie allows developers to abstract this role creation process by acting as a centralized source of truth for granular permission management. AccessGenie’s API will return a list of boolean permissions for a given user id. Developers can then do with this list as they please to implement route restriction or any other kind of privacy protection. AccessGenie empowers developers to truly embody information security’s [Principle of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).

## Creating an App

AccessGenie is designed to aid in the app development process. To begin, simply click the ‘+’ icon on the Applications page. After giving the application a title and a brief description, it can be accessed directly from the dashboard. From there, one can add custom roles and permissions or manage their team members. Thus, before development even begins, AccessGenie incentivizes thoughtful consideration of permissions and user access requirements, which is essential to building robust, secure applications, designed to withstand cyberthreats and critical system failures.

## Accessing Permissions

To obtain permissions for use in your app, AcessGenie provides an API endpoint that supplies a list of permissions held by the desired user. Simply send a GET request to the following end point using a user-specific API token as the `userId` parameter.

```https://us-central1-cornhax2023.cloudfunctions.net/getUserPermissions?userId=<userToken>```
