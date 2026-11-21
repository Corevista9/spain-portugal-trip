# Spain–Portugal Trip App — Design Document

## 1. Purpose

A mobile-first, shareable travel planning application for a 14-day Spain–Portugal trip for three travelers:

- JJ — adult and trip organizer
- QQ — adult and father
- AA — 13-year-old daughter

The app will present confirmed travel information, build a relaxed day-by-day itinerary, support group discussion, and expose map, hotel, transport, weather, packing, and budget considerations.

## 2. Confirmed Trip Information

- Travel period: March 15–28, 2027
- Duration: 14 days / 12 nights
- Countries: Spain and Portugal
- Cities: Barcelona, Madrid, Seville, Lisbon
- Travelers: 3
- All travelers: Canadian passports
- Luggage: 2 large checked suitcases and 2 small carry-ons
- Transport preference: no rental car; use public transit, metro, trains, taxis, and Uber where practical
- Walking target: below 15,000 steps per day; relaxed pace preferred

## 3. Known Flights

### Outbound

- Airline: Air Canada
- Flight: AC 820
- Route: Toronto YYZ → Barcelona BCN
- Date: March 15, 2027
- Departure: 19:50
- Arrival: 08:20+1
- Duration: 7 hours 30 minutes

### Return

- Airline: Air Canada
- Flight: AC 811
- Route: Lisbon LIS → Toronto YYZ
- Date: March 28, 2027
- Departure: 13:00
- Arrival: 15:55
- Duration: 7 hours 55 minutes

## 4. Proposed Route

| City | Nights | Proposed Dates |
|---|---:|---|
| Barcelona | 3 | Mar 16–19 |
| Madrid | 3 | Mar 19–22 |
| Seville | 2 | Mar 22–24 |
| Lisbon | 4 | Mar 24–28 |

## 5. Product Goals

- Mobile-readable on iPhone Safari and as a PWA
- Shareable by link with the group
- Photos and screenshots embedded without clutter
- Clear day-by-day itinerary
- Centralized flight, hotel, ticket, and transport details
- Voting and comments for group decisions
- Offline-friendly access to essential trip information
- Safe, luggage-friendly, relaxed logistics

## 6. Core Screens

### Trip Overview

- Cover photo
- Dates and duration
- Route summary
- Flight summary
- Key pace and luggage indicators
- Group decision cards

### Day-by-Day Planner

- Fourteen day tabs
- One primary activity per day
- Optional activity
- Rest period
- Weather and walking estimate
- Transit instructions
- Booking state

### Route Map

- Barcelona → Madrid → Seville → Lisbon
- Major train stations and airports
- Hotel positions
- Transfer routes
- Google/Apple Maps links

### Hotels

- One shortlisted hotel per city
- One alternate hotel per city
- Walking/transit score
- Distance to rail and metro stations
- Airport connection
- Room setup for three travelers
- Nightly CAD estimate
- Safety and review checks

### Flights and Documents

- Airline, flight number, time, and terminal
- Passport and minor-travel-document checklist
- Ticket/PNR storage
- Entry requirement checklist
- Travel insurance

### Group Room

- JJ, QQ, and AA
- Polls and votes
- Comments
- Favorites
- Assignment of owners for reservations and payments

### Weather and Packing

- March 15–28 forecast snapshot
- Typical Spanish and Portuguese weather ranges
- Rain and wind safeguards
- Layered packing list
- Accommodation laundry information

## 7. Hotel Criteria

Hotels must be evaluated against:

- Walking distance to metro, rail, or major transit
- Downtown or established visitor area
- Strong evening foot traffic and accessible transport
- Recent guest reviews
- Elevator, air conditioning/heating, and luggage storage
- Family room or three-bed accommodation
- Airport or intercity station transfer
- Low-friction taxi/Uber pickup
- Avoidance of unsupported or sensational safety claims

## 8. Transport Rules

- No rental car
- Use metro, tram, train, bus, taxi, or Uber
- Prefer luggage-friendly door-to-door transfers
- Reserve intercity rail as early as practical
- Use AVE or comparable high-speed rail for Spain
- Compare Seville–Lisbon coach, train, and flight options
- Airport transfer: prebooked taxi or airport transit based on timing and luggage
- Keep hotel-to-attraction legs at short intervals

## 9. Relaxed-Itinerary Rules

- Target below 15,000 steps/day
- Prefer 8,000–12,000 steps where practical
- Maximum one major attraction in a morning
- One substantial break during the day
- Avoid sequential early starts
- Avoid overloading the arrival and departure days
- Offer a rest or indoor option for each major day
- Use timed tickets for only one or two major attractions per day

## 10. Data Model

### Trip

- id
- title
- startDate
- endDate
- travelerIds
- timezone
- privacy
- shareCode

### Traveler

- id
- displayName
- role
- dateOfBirth
- passportType
- accessibilityNeeds
- preferences

### CityStay

- id
- city
- country
- checkIn
- checkOut
- hotelId
- nights
- transportHub

### ItineraryDay

- id
- date
- city
- title
- pace
- morningPlan
- lunchPlan
- afternoonPlan
- dinnerPlan
- walkingEstimate
- indoorAlternative
- notes

### Activity

- id
- name
- address
- category
- openingHours
- bookingUrl
- ticketState
- photoUrls
- mapUrl
- estimatedCost
- familySuitability

### TransportLeg

- id
- from
- to
- mode
- departure
- arrival
- bookingUrl
- bookingReference
- luggageNotes

### Hotel

- id
- name
- address
- checkIn
- checkOut
- roomType
- transitNotes
- safetyNotes
- bookingUrl
- bookingReference

### GroupDecision

- id
- title
- choices
- votes
- comments
- closingDate

## 11. Information to Add Later

- Exact hotel budget in CAD
- Room preferences
- One-way or round-trip ground transport from Toronto
- Interests of JJ, QQ, and AA
- Dietary restrictions
- Preferred weather temperature
- Museum, food, shopping, beach, or sports priorities
- Confirmed booking status
- Air Canada booking reference
- Hotel room photos and screenshots
- Additional photos supplied through OneDrive

## 12. Open Planning Questions

- Is March 15–28 exactly confirmed, or could the displayed flight be a different year?
- Is AC 820 already ticketed?
- Is AC 811 already ticketed?
- Which hotel star level and nightly budget are acceptable?
- Would the family prefer two rooms or one family room/suite?
- Should Seville–Lisbon use a flight or a long-distance coach/bus?
- Which activities are must-do for AA?
- Which activities are must-do for QQ and JJ?
- Is Sintra a day trip from Lisbon or excluded due to the relaxed pace?

## 13. Safety and Compliance

- Verify entry, passport, airline, Schengen, insurance, and minor-travel requirements before booking.
- Do not make racial or neighborhood safety claims based on demographics.
- Treat late-night walking, recent theft reports, transit operating hours, lighting, and hotel-location reviews as factual review dimensions.
- Never embed PNR, passport numbers, or sensitive identity documents in public share links.
- Keep personal documents private and backend-protected in a future implementation.

## 14. Verification Strategy

- Unit test date calculations and route sequence
- Test responsive layouts at iPhone viewport sizes
- Test share links and permissions
- Test offline data fallback
- Test timed-ticket and hotel booking deep links
- Validate no sensitive flight or identity information is exposed by public links
- Build the app and run targeted UI checks after each feature
