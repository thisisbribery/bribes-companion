# Bribeluge Companion

A second screen for the Synthstrom Deluge running **[BRIBELUGE (Deluge Bribes firmware)](https://github.com/thisisbribery/deluge-bribes-v1)** v1.32 or later, on a phone or tablet connected over USB.

**Open it:** https://www.thisisbribery.com/companion/

**Support:** find it useful? [Buy me a coffee on Ko-fi](https://ko-fi.com/thisisbribery).

- The Deluge's display mirrored (7SEG or OLED), with every 7-segment abbreviation spelled out in full and a menu item's name and value side by side.
- A top bar with Play, Record, tempo, Back, the select knob and SELECT.
- The track you're on: a drawing of its engine, its main settings and its engine's own controls as knobs you can tap to open on the Deluge.
- Synth and kit pickers as picture tiles, preset folders as a list you can tap to load.
- Waveforms for audio clips, sample markers and Start offset, with draggable markers and playheads.
- Song view (rows and grid) and the arranger, with each clip's steps, playheads and the pads' glows. Tap to launch clips and sections.

## STOCK mode: no firmware change

The selector at the top switches between **STOCK** and **BRIBELUGE**. On connect the page checks which firmware it's talking to and picks for you (a green dot marks what it found); a tap overrides it. STOCK works with plain community firmware 1.3, nothing flashed:

- The Deluge's display mirrored large (7SEG or OLED, and the 7SEG to OLED swap).
- MIDI Follow knobs for the current track, using the firmware's default CC map, with the Deluge's own values shown when MIDI Follow feedback is on. Knobs that don't apply to the track dim.
- Play, Record, Restart, Tap tempo, Undo, Redo, Loop and Fill (held) as learned MIDI commands.
- Tempo and the play light from the Deluge's MIDI clock out.

One-time setup on the Deluge (also listed in the app): set `SETTINGS > MIDI > MIDI-FOLLOW > CHANNEL A` to 15 and `FEEDBACK > CHANNEL` to A, keep `CLOCK > OUT` on, and learn each command under `SETTINGS > MIDI > COMMANDS` by holding LEARN and tapping Send in the app (commands use CCs 102 to 109 on channel 16). Both channels can be changed in the app.

It needs Chrome or Edge (Web MIDI with SysEx); Safari and iOS browsers don't have Web MIDI. To use it offline, open it once in Chrome and choose **Add to Home screen**: it then runs fullscreen, keeps the screen awake and reconnects on its own.

Full details are in the [BRIBELUGE COMPANION section](https://github.com/thisisbribery/deluge-bribes-v1#27-bribeluge-companion) of the firmware's README.

Not affiliated with or endorsed by Synthstrom Audible.
