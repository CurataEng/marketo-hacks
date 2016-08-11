# Force Disabling of Adblocker on All Pages

## What is this?
The code in this directory masks web pages with a prompt to disable the adblocker if it detected they are blocking the loading of a Marketo munchkin.

## Installation
First, install [fullscreen-adblock.js](fullscreen-adblock.js) contained in this directory on your webserver.

Reference the code file in a script tag after the script tag with the Marketo Munchkin code, on all pages of your site that have a Marketo Munchkin tracker.

Warning: Only use this on pages that have a Marketo munchkin. Placing this code on pages that do not have the Marketo Munchkin code will cause this to falsely prompt users to disable their adblocker.

Here is an example script tag to include on your site: `<script src="fullscreen-adblock.js"></script>`

## Sample
An example implementation is available [here](sample.html).
