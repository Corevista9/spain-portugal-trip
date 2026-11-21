export type Stop = {
  city: string;
  country: string;
  nights: number;
  dates: string;
  x: number;
  y: number;
};

export type TripDay = {
  date: string;
  city: string;
  title: string;
  description: string;
  pace: 'Light' | 'Moderate';
  transport: string;
  morning: string;
  midday: string;
  evening: string;
  walking: string;
  alternate: string;
};

export const travelers = ['JJ', 'QQ', 'AA'];

export const stops: Stop[] = [
  { city: 'Barcelona', country: 'Spain', nights: 3, dates: 'Mar 16–19', x: 76, y: 38 },
  { city: 'Madrid', country: 'Spain', nights: 3, dates: 'Mar 19–22', x: 45, y: 48 },
  { city: 'Seville', country: 'Spain', nights: 2, dates: 'Mar 22–24', x: 38, y: 78 },
  { city: 'Lisbon', country: 'Portugal', nights: 4, dates: 'Mar 24–28', x: 12, y: 68 },
];

export const days: TripDay[] = [
  {
    date: 'Mar 15', city: 'Toronto', title: 'Fly to Barcelona',
    description: 'AC 820 · Depart YYZ 19:50 · overnight flight', pace: 'Light',
    transport: 'Prebooked Toronto-to-YYZ transfer or airport taxi',
    morning: 'Pack and keep passports, medicines and two carry-ons easy to reach.',
    midday: 'Light lunch in Toronto, then confirm booking references and check-in.',
    evening: 'Board AC 820 at 19:50. Eat the airline meal, hydrate and try to sleep.',
    walking: 'Under 6,000 steps',
    alternate: 'Use curbside assistance and Priority airport assistance if walking feels tiring.',
  },
  {
    date: 'Mar 16', city: 'Barcelona', title: 'Arrive & settle',
    description: 'Airport → central hotel · easy lunch · no major sights', pace: 'Light',
    transport: 'Aerobús or metro; taxi from the hotel drop-off for four bags',
    morning: 'Land BCN around 08:20. Clear entry, collect bags and transfer to the hotel.',
    midday: 'Leave bags with the hotel, have a simple lunch near Plaça de Catalunya and orient locally.',
    evening: 'Optional 30-minute Eixample walk, early dinner and bed by 20:30–21:00.',
    walking: 'Around 6,000–8,000 steps',
    alternate: 'Skip the walk and spend the evening in the hotel or a nearby café.',
  },
  {
    date: 'Mar 17', city: 'Barcelona', title: 'Sagrada Família',
    description: 'Timed basilica visit · Eixample lunch · hotel rest', pace: 'Moderate',
    transport: 'Metro L2/L5 to Sagrada Família; taxi on the return',
    morning: 'Start slowly at 09:30. Prebook a timed Sagrada Família ticket and remain inside 60–90 minutes.',
    midday: 'Lunch around Eixample, then return to the hotel for a 90-minute rest.',
    evening: 'Short walk on Passeig de Sant Joan or stay near the hotel for dinner.',
    walking: 'About 8,000–10,000 steps',
    alternate: 'Visit a nearby interior museum or café if the weather is poor.',
  },
  {
    date: 'Mar 18', city: 'Barcelona', title: 'Gothic Quarter & waterfront',
    description: 'Cathedral exterior · Old Town · optional beach break', pace: 'Moderate',
    transport: 'Metro to Jaume I or Plaça Catalunya; taxi for the return',
    morning: 'Metro to Plaça Catalunya, visit the Gothic Quarter and Barcelona Cathedral exterior.',
    midday: 'Long tapas lunch in a busy central area, followed by hotel rest.',
    evening: 'Choose a short waterfront segment or take a taxi to Barceloneta for dinner.',
    walking: 'About 9,000–11,000 steps',
    alternate: 'Replace the waterfront with the Picasso Museum or shopping around Passeig de Gràcia.',
  },
  {
    date: 'Mar 19', city: 'Madrid', title: 'Barcelona to Madrid',
    description: 'AVE train · luggage transfer · relaxed central evening', pace: 'Light',
    transport: 'Metro/taxi to Sants → AVE to Madrid-Puerta de Atocha → taxi to hotel',
    morning: 'Check out after breakfast and leave Barcelona around 09:30–10:30 by AVE.',
    midday: 'Arrive Madrid, check in or leave bags, then have a simple station-area lunch.',
    evening: 'Short walk around Puerta del Sol and dinner near the hotel.',
    walking: 'Around 5,000–7,000 steps',
    alternate: 'Skip the Sol walk and use a taxi to a central covered market.',
  },
  {
    date: 'Mar 20', city: 'Madrid', title: 'Prado & Retiro',
    description: 'Timed Prado entry · Retiro gardens · long rest', pace: 'Moderate',
    transport: 'Metro and short taxi rides; avoid unnecessary transfers',
    morning: 'Reserve a 09:30 or 10:00 Prado ticket. Focus on one wing or a curated highlights route.',
    midday: 'Lunch near the museum, then take a taxi to the hotel for rest.',
    evening: 'Optional flat walk through Retiro’s main entrance area and café stop.',
    walking: 'About 8,000–10,000 steps',
    alternate: 'On rain, shift to the Thyssen-Bornemisza museum or a covered shopping stop.',
  },
  {
    date: 'Mar 21', city: 'Madrid', title: 'Royal Madrid',
    description: 'Palacio Real · Plaza Mayor · relaxed afternoon', pace: 'Moderate',
    transport: 'Metro or taxi to Ópera; taxi back after lunch',
    morning: 'Visit the Royal Palace with a timed entry and take seated breaks in each room sequence.',
    midday: 'Lunch in a busy area around Plaza Mayor, then return to the hotel.',
    evening: 'Low-key dinner nearby; optional chocolate and churros as a shared treat.',
    walking: 'Around 9,000–11,000 steps',
    alternate: 'Use the Reina Sofía or Telefónica building area if outdoor walking is uncomfortable.',
  },
  {
    date: 'Mar 22', city: 'Seville', title: 'Madrid to Seville',
    description: 'AVE train · hotel settle-in · tapas near stay', pace: 'Light',
    transport: 'Metro to Atocha → AVE to Seville-Santa Justa → taxi to hotel',
    morning: 'Late breakfast and mid-morning AVE train to Seville.',
    midday: 'Arrive, check in and eat lunch close to the hotel.',
    evening: 'Short level walk near the hotel and an early family tapas dinner.',
    walking: 'Around 5,000–7,000 steps',
    alternate: 'Stay at the hotel or take a taxi to a central indoor dining area.',
  },
  {
    date: 'Mar 23', city: 'Seville', title: 'Cathedral & Alcázar',
    description: 'Two timed bookings · Plaza de España · long midday rest', pace: 'Moderate',
    transport: 'Taxi between attractions and short central walks',
    morning: 'Prebook Alcázar, Cathedral and Giralda separately. Visit only the lower floors and main highlights.',
    midday: 'Long lunch and hotel rest after the Cathedral segment.',
    evening: 'Taxi to Plaza de España for a flat 30–45 minute visit and sunset photos.',
    walking: 'Around 9,000–12,000 steps',
    alternate: 'Choose a flamenco show or covered museum if rain or heat becomes uncomfortable.',
  },
  {
    date: 'Mar 24', city: 'Lisbon', title: 'Seville to Lisbon',
    description: 'Travel day · direct transfer option to confirm · central Lisbon check-in', pace: 'Light',
    transport: 'Compare direct flight, ALSA coach and rail; prebook taxi after arrival',
    morning: 'Leave Seville after breakfast once the best direct Lisbon transfer is confirmed.',
    midday: 'Travel in a single leg where possible with a rest stop and lunch allowance.',
    evening: 'Check in near Baixa/Rossio, have a simple dinner and unpack for four nights.',
    walking: 'Under 6,000 steps',
    alternate: 'Take a prebooked transfer if the public route requires difficult changes with luggage.',
  },
  {
    date: 'Mar 25', city: 'Lisbon', title: 'Belém & riverside Lisbon',
    description: 'Jerónimos exterior · Belém museum · pastry break', pace: 'Moderate',
    transport: 'Taxi or tram 15 to Belém; taxi return after lunch',
    morning: 'Leave after breakfast for Belém. Prebook the monastery or choose the modern museum as the indoor option.',
    midday: 'Pastéis de Belém, seated lunch and a hotel rest.',
    evening: 'Optional flat walk along Praça do Comércio or dinner in Baixa.',
    walking: 'About 8,000–10,000 steps',
    alternate: 'Use a taxi and remain inside the Jerónimos museum or MAAT on wet days.',
  },
  {
    date: 'Mar 26', city: 'Lisbon', title: 'Baixa, Alfama & viewpoints',
    description: 'Level central streets · one viewpoint · family-friendly evening', pace: 'Moderate',
    transport: 'Metro to Baixa-Chiado; taxi or tram for uphill portions',
    morning: 'Start at Praça do Comércio and Baixa, then take a taxi uphill to a single Alfama viewpoint.',
    midday: 'Lunch below the hill, with a hotel rest in the afternoon.',
    evening: 'Short dinner walk around Bairro Alto or an optional seated fado show.',
    walking: 'About 9,000–12,000 steps',
    alternate: 'Skip Alfama and replace it with the Time Out Market and tile museum.',
  },
  {
    date: 'Mar 27', city: 'Lisbon', title: 'Flexible Lisbon or Sintra',
    description: 'Choose one outing · keep afternoon free · prepare for departure', pace: 'Light',
    transport: 'No fixed cross-city transfer; taxi or train only for the chosen option',
    morning: 'Vote on a half-day Sintra train outing or stay in Lisbon for the Gulbenkian museum and shopping.',
    midday: 'Keep lunch and rest flexible instead of adding a second major booking.',
    evening: 'Pack, confirm AC 811, arrange the airport taxi and have an early dinner.',
    walking: 'Around 6,000–9,000 steps',
    alternate: 'Choose the Gulbenkian, LX Factory or aquarium if rain or energy is low.',
  },
  {
    date: 'Mar 28', city: 'Lisbon', title: 'Fly home',
    description: 'AC 811 · LIS 13:00 → YYZ 15:55 · carry-on check', pace: 'Light',
    transport: 'Prebooked taxi or airport metro; allow 3 hours at LIS',
    morning: 'Early breakfast, check out, collect all bags and leave for LIS airport around 09:00–09:30.',
    midday: 'Arrive airport 3 hours before departure, clear formalities and rest near the gate.',
    evening: 'Board AC 811 at 13:00 and arrive Toronto YYZ at 15:55.',
    walking: 'Under 7,000 steps',
    alternate: 'Request airport wheelchair assistance if the final walking distance feels excessive.',
  },
];
