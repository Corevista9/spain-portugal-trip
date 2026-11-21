# Bug Tracker

## Open

### BUG-001 — Group-tab member expression fails TypeScript build

- **Status:** Fixed
- **Severity:** Blocker
- **Area:** `src/App.tsx`, Group tab
- **Symptom:** TypeScript reported `Property 'map' does not exist on type '{ JJ: string; QQ: string; AA: string; }'` at the traveler rendering block.
- **Root cause:** A JSX object expression was incorrectly using `.map()` instead of an array of `[name, detail]` tuples.
- **Fix:** Replaced the object expression with an array and mapped the traveler tuples.
- **Verification:**
  - Ran `npm run build` successfully.
  - Confirmed no TypeScript or Vite errors.

## Notes

- File is kept in `trip-material/notes/` so it is available to VS Code through OneDrive.
- Update this file with the result and add any future build/runtime issues here.
