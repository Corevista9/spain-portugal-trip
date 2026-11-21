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
};

export const travelers = ['JJ', 'QQ', 'AA'];

export const stops: Stop[] = [
  { city: 'Barcelona', country: 'Spain', nights: 3, dates: 'Mar 16–19', x: 76, y: 38 },
  { city: 'Madrid', country: 'Spain', nights: 3, dates: 'Mar 19–22', x: 45, y: 48 },
  { city: 'Seville', country: 'Spain', nights: 2, dates: 'Mar 22–24', x: 38, y: 78 },
  { city: 'Lisbon', country: 'Portugal', nights: 4, dates: 'Mar 24–28', x: 12, y: 68 },
];

export const days: TripDay[] = [
  { date: 'Mar 15', city: 'Toronto', title: 'Fly to Barcelona', description: 'AC 820 · Depart YYZ 19:50', pace: 'Light', transport: 'Toronto airport pickup or transit' },
  { date: 'Mar 16', city: 'Barcelona', title: 'Arrive & settle', description: 'Airport → central hotel · easy lunch · no major sights', pace: 'Light', transport: 'Aerobús or metro + taxi for luggage' },
  { date: 'Mar 17', city: 'Barcelona', title: 'Sagrada Família', description: 'Timed ticket · Eixample lunch · hotel rest', pace: 'Moderate', transport: 'Metro/short taxi' },
  { date: 'Mar 18', city: 'Barcelona', title: 'Gothic Quarter', description: 'Old-town stroll · waterfront option · relaxed dinner', pace: 'Moderate', transport: 'Walking + metro' },
  { date: 'Mar 19', city: 'Madrid', title: 'Barcelona to Madrid', description: 'AVE high-speed train · Puerta del Sol area', pace: 'Light', transport: 'Metro to station → AVE → taxi' },
  { date: 'Mar 20', city: 'Madrid', title: 'Prado & Retiro', description: 'Prado timed entry · Retiro gardens · indoor backup', pace: 'Moderate', transport: 'Metro + taxi' },
  { date: 'Mar 21', city: 'Madrid', title: 'Royal Madrid', description: 'Palace interior · neighborhood lunch · rest afternoon', pace: 'Moderate', transport: 'Metro + short taxi' },
  { date: 'Mar 22', city: 'Seville', title: 'Madrid to Seville', description: 'High-speed train · evening tapas near hotel', pace: 'Light', transport: 'Metro to Atocha → AVE → taxi' },
  { date: 'Mar 23', city: 'Seville', title: 'Cathedral & Alcázar', description: 'Two timed bookings with a long midday rest', pace: 'Moderate', transport: 'Walk short legs + taxi' },
  { date: 'Mar 24', city: 'Lisbon', title: 'Seville to Lisbon', description: 'Direct transport day · settle in central Lisbon', pace: 'Light', transport: 'Long-distance coach/train or flight TBD' },
  { date: 'Mar 25', city: 'Lisbon', title: 'Belém', description: 'Tram/taxi to Belém · museum or monastery · pastry break', pace: 'Moderate', transport: 'Tram 15 or taxi' },
  { date: 'Mar 26', city: 'Lisbon', title: 'Old Lisbon', description: 'Baixa, Alfama and viewpoints at a relaxed pace', pace: 'Moderate', transport: 'Metro + short taxi' },
  { date: 'Mar 27', city: 'Lisbon', title: 'Flexible Lisbon day', description: 'Indoor museum, shopping or Sintra as one optional outing', pace: 'Light', transport: 'Metro/taxi or coordinated day trip' },
  { date: 'Mar 28', city: 'Lisbon', title: 'Fly home', description: 'AC 811 · Lisbon 13:00 → Toronto 15:55', pace: 'Light', transport: 'Prebooked taxi or metro-airport' },
];
