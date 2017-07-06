# Agahnim
A cross-platform automated item tracker for A Link to the Past Randomizer

For more information on the Randomizer itself, visit: http://vt.alttp.run/randomizer


# Usage
In order for automatic item tracking to function, you'll need to use an emulator that supports automatic SRAM saving. Currently, SNES9x support this feature. You can enable it in the 'Settings' menu.

Once you have auto-save working, make sure your Randomizer ROM has "SRAM Trace" enabled. You can find this option in the ROM Settings menu on the Randomizer page.

Launch Agahnim, and navigate to the "Configuration" tab, and point it to the SRAM/SRM file output by your emulator. Tracking should now occur automatically.

# Notes
Automated item tracking is forbidden in SRL races. Most tournament ROMs will not support SRAM Trace regardless, but don't use this software in any race environment.

If your emulator does not automatically dump SRAM periodically, you can still use Agahnim to quickly check on your item progress by loading your SRAM/SRM file normally. It just won't auto-update after the fact.

Some new automatic time-tracking features are in the works!

# Known Issues
* A few items probably don't have their correct offsets
* The bow does not function properly
* The bottle does not function properly
* Release binaries have huge file sizes right now. Not sure how much of this can be mitigated, given how Electron works. Going to look into it

# Contributing
If you can stand my horrible knowledge of the JS ecosystem, you're welcome to create Pull Requests for any features/fixes you're interested in.

You'll need to have yarn, Electron, and nodejs configured on your box before running. Once you do, simply `yarn install` and then `yarn start` to launch the dev version.
