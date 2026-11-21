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
  { city: 'Seville', country: 'Spain', nights: 3, dates: 'Mar 22–25', x: 38, y: 78 },
  { city: 'Lisbon', country: 'Portugal', nights: 3, dates: 'Mar 25–28', x: 12, y: 68 },
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
    date: 'Mar 18', city: 'Barcelona', title: 'Casa Batlló or La Pedrera + Montjuïc',
    description: 'Gaudí house · Barceloneta · Montjuïc sunset and Magic Fountain', pace: 'Moderate',
    transport: 'Metro at Passeig de Gràcia; metro/taxi for Barceloneta and Montjuïc',
    morning: 'Choose Casa Batlló or Casa Milà around Passeig de Gràcia for 09:00–12:30.',
    midday: 'Lunch in the Eixample or Gràcia area, then walk to Barceloneta for a quiet beach break.',
    evening: 'Go up Montjuïc after 17:00 for sunset, Castle, funicular/cable car and the Magic Fountain around 20:00.',
    walking: 'About 10,000–13,000 steps',
    alternate: 'Skip the beach or cable car; use indoor museums and short taxi hops in rain or strong wind.',
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
    date: 'Mar 21', city: 'Madrid', title: 'Toledo day trip',
    description: 'Renfe Avant · Jewish Quarter · Primatial Cathedral · valley view', pace: 'Moderate',
    transport: 'Atocha → Toledo by Renfe Avant; escalators, bus or taxi uphill; return by the last practical train',
    morning: 'Take an early train to Toledo. Visit the Jewish Quarter and free Sunday entry at the Sefardí Museum.',
    midday: 'Lunch near Zocodover, then use timed access for the Primatial Cathedral in the afternoon.',
    evening: 'Choose Mirador del Valle or a museum/old-town option, then return to Madrid by around 21:00.',
    walking: 'Around 10,000–15,000 steps',
    alternate: 'Skip Mirador del Valle and use taxis/escalators if steep streets or heat become tiring.',
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
    date: 'Mar 23', city: 'Seville', title: 'Alcázar & Cathedral',
    description: 'Real Alcázar · Cathedral · optional Giralda · Santa Cruz rest', pace: 'Moderate',
    transport: 'Tram T1 to Archivo de Indias; short taxis and seated breaks',
    morning: 'Reserve 09:30 Alcázar. Allow 2–3 hours, including gardens and a long seated break.',
    midday: 'Lunch in Santa Cruz, then reserve 14:00–15:30 for the Cathedral and optional Giralda ramp climb.',
    evening: 'Return to the hotel for a rest, then optional indoor flamenco planning or a simple dinner.',
    walking: 'Around 10,000–15,000 steps',
    alternate: 'Do not climb Giralda if stairs, height or luggage are issues; use the Cathedral interior and Santa Cruz streets.',
  },
  {
    date: 'Mar 24', city: 'Seville', title: 'Triana & flamenco',
    description: 'Triana market · ceramics · slow afternoon · reserved flamenco', pace: 'Light',
    transport: 'Walk to Triana bridge or use tram/bus; taxi for the evening',
    morning: 'Visit Mercado de Triana and Triana Ceramics Centre before 13:00.',
    midday: 'Lunch in Triana or the old centre, then return to the hotel for rest.',
    evening: 'Attend a 17:00, 19:00 or 19:30 flamenco performance; keep dinner simple.',
    walking: 'Around 7,000–10,000 steps',
    alternate: 'Skip the market and watch a procession route from a seated indoor venue or café.',
  },
  {
    date: 'Mar 25', city: 'Lisbon', title: 'Fly Seville to Lisbon',
    description: 'TAP TP1105 · Alfama check-in · sunset walk', pace: 'Light',
    transport: 'EA airport bus or taxi to SVQ; Lisbon metro red line or taxi to hotel',
    morning: 'Enjoy a free Seville morning, check out and reach SVQ at least two hours before departure.',
    midday: 'TAP TP1105 departs 15:25 and arrives Lisbon around 15:30 local time. Collect bags and transfer into town.',
    evening: 'Walk Alfama downhill from Senhora do Monte and viewpoints, or skip the climb and dinner near the hotel.',
    walking: 'Around 6,000–9,000 steps',
    alternate: 'Use taxis and elevators rather than Alfama hills, especially after the flight and on cobblestones.',
  },
  {
    date: 'Mar 26', city: 'Lisbon', title: 'Belém + Chiado',
    description: 'Jerónimos · Belém Tower · Pastéis de Belém · tram 28', pace: 'Moderate',
    transport: 'Train or 15E tram to Belém; metro/taxi to Chiado',
    morning: 'Reserve 09:30 Jerónimos. Add Pastéis de Belém and 11:30 Belém Tower if the weather is good.',
    midday: 'Lunch in Belém, then return toward central Lisbon and rest.',
    evening: 'Explore Chiado/Bairro Alto and take tram 28 around 19:00 or later to avoid crowds.',
    walking: 'Around 10,000–14,000 steps',
    alternate: 'Use taxis and replace tower access with the riverside or MAAT on rain or strong wind.',
  },
  {
    date: 'Mar 27', city: 'Lisbon', title: 'Sintra & Cabo da Roca',
    description: 'Pena Palace · Sintra old town · continental western tip', pace: 'Moderate',
    transport: 'Rossio train to Sintra; 434 bus, taxi/Bus 403 to Cabo da Roca and return',
    morning: 'Take the 08:00 Rossio train, then a timed Pena Palace entry around 10:00. Easter Saturday is crowded.',
    midday: 'Lunch in Sintra, then take the latest practical 403 route to Cabo da Roca.',
    evening: 'Return to Lisbon for a farewell dinner or return via Cascais if schedules work.',
    walking: 'Around 12,000–15,000 steps',
    alternate: 'Skip Cabo da Roca in rain or wind and stay inside Sintra old town and museums.',
  },
  {
    date: 'Mar 28', city: 'Lisbon', title: 'Fly home',
    description: 'Easter Sunday · AC 811 · LIS 13:00 → YYZ 15:55', pace: 'Light',
    transport: 'Prebooked taxi or metro red line; arrive LIS by 10:00 for a 13:00 flight',
    morning: 'Check out after breakfast. Easter closures may affect attractions; leave for the airport early.',
    midday: 'Clear formalities at LIS three hours before departure and rest near the gate.',
    evening: 'Board AC 811 at 13:00 and arrive Toronto YYZ at 15:55 local time.',
    walking: 'Under 7,000 steps',
    alternate: 'Request airport wheelchair assistance and allow for possible Easter-weekend queues.',
  },
];
