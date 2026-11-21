# Bug Tracker

## Open

### BUG-001 — Group-tab member expression fails TypeScript build

- **Status:** Open
- **Severity:** Blocker
- **Area:** `src/App.tsx`, Group tab
- **Symptom:** TypeScript reports `Property 'map' does not exist on type '{ JJ: string; QQ: string; AA: string; }'` at the traveler rendering block.
- **Suspected cause:** A malformed JSX object expression remains in the Group tab. The intended rendering is an array of `[name, detail]` tuples.
- **Expected result:** The app renders JJ, QQ, and AA traveler cards and completes `npm run build`.
- **Verification:**
  - Remove or replace the malformed block.
  - Run `npm run build`.
  - Confirm no TypeScript or Vite errors.

## Notes

- File is kept in `trip-material/notes/` so it is available to VS Code through OneDrive.
- Update this file with the result and add any future build/runtime issues here.
