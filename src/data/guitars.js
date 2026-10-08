import epiphoneZwImg from '../assets/images/epiphone-zw.png';
import jacksonRr1Img from '../assets/images/jackson-rr1.png';
import kramerPacerImg from '../assets/images/kramer-pacer.png';
import washburnDimebagImg from '../assets/images/washburn-dimebag.png';
import espBlackyImg from '../assets/images/esp-blacky.png';
import epiphoneSgImg from '../assets/images/epiphone-sg.png';
import evhStripedImg from '../assets/images/evh-striped.png';

import zakkWyldeArtist from '../assets/images/zakk-wylde.jpg';
import randyRhoadsArtist from '../assets/images/randy-rhoads.jpg';
import satchelArtist from '../assets/images/satchel.jpg';
import dimebagArtist from '../assets/images/dimebag.jpg';
import alexiLaihoArtist from '../assets/images/alexi-laiho.jpg';
import tonyIommiArtist from '../assets/images/tony-iommi.jpg';
import eddieVanHalenArtist from '../assets/images/eddie-van-halen.jpg';

export const GUITARS = [
  {
    id: '01',
    name: 'EPIPHONE ZW',
    subtitle: 'ZAKK WYLDE',
    artist: 'ZAKK WYLDE',
    band: 'Black Label Society',
    color: '#D97706',
    description: 'Iconic signature model featuring custom graphics, high-output humbuckers, and powerful sustain.',
    song: 'In This River',
    specs: { body: 'Mahogany', neck: 'Maple', frets: '22 Medium Jumbo', pickups: 'EMG 81/85' },
    guitarImg: epiphoneZwImg,
    artistImg: zakkWyldeArtist
  },
  {
    id: '02',
    name: 'JACKSON RR1 RANDY RHOADS',
    subtitle: 'RANDY RHOADS',
    artist: 'RANDY RHOADS',
    band: 'Ozzy Osbourne / Quiet Riot',
    color: '#DC2626',
    description: 'The iconic offset V shape designed in collaboration with legendary guitarist Randy Rhoads.',
    song: 'Crazy Train',
    specs: { body: 'Alder', neck: 'Maple Neck-Through', frets: '22 Jumbo', pickups: 'Seymour Duncan Distortion' },
    guitarImg: jacksonRr1Img,
    artistImg: randyRhoadsArtist
  },
  {
    id: '03',
    name: 'KRAMER PACER VINTAGE',
    subtitle: 'SATCHEL',
    artist: 'SATCHEL',
    band: 'Steel Panther',
    color: '#7C3AED',
    description: 'A tribute to the high-octane performance guitars of the 1980s, designed for lightning-fast riffs.',
    song: 'Just Like Tiger Woods',
    specs: { body: 'Maple', neck: 'Maple', frets: '22 Medium Jumbo', pickups: 'Seymour Duncan JB/JN' },
    guitarImg: kramerPacerImg,
    artistImg: satchelArtist
  },
  {
    id: '04',
    name: 'WASHBURN DIMEBAG HELL',
    subtitle: 'DIMEBAG DARRELL',
    artist: 'DIMEBAG DARRELL',
    band: 'Pantera / Damageplan',
    color: '#2563EB',
    description: 'Built for extreme metal solos, featuring a radical shape and Floyd Rose locking tremolo system.',
    song: 'Cemetery Gates',
    specs: { body: 'Mahogany', neck: 'Set Mahogany', frets: '22 Jumbo', pickups: 'Bill Lawrence L500' },
    guitarImg: washburnDimebagImg,
    artistImg: dimebagArtist
  },
  {
    id: '05',
    name: 'ESP BLACKY ALEXI',
    subtitle: 'ALEXI LAIHO',
    artist: 'ALEXI LAIHO',
    band: 'Children of Bodom',
    color: '#16A34A',
    description: 'Features an offset V body, neck-thru construction, single EMG humbucker, and Floyd Rose bridge.',
    song: 'Children of Decadence',
    specs: { body: 'Alder', neck: '3-Piece Maple', frets: '24 Extra Jumbo', pickups: 'EMG HZ-FH2' },
    guitarImg: espBlackyImg,
    artistImg: alexiLaihoArtist
  },
  {
    id: '06',
    name: 'EPIPHONE IOMMI SG CUSTOM',
    subtitle: 'TONY IOMMI',
    artist: 'TONY IOMMI',
    band: 'Black Sabbath',
    color: '#312E81',
    description: 'Designed with the Godfather of Heavy Metal. Features legendary cross inlays and twin humbuckers.',
    song: 'Paranoid',
    specs: { body: 'Mahogany', neck: 'Mahogany', frets: '24 Medium Jumbo', pickups: 'Gibson USA Iommi Humbuckers' },
    guitarImg: epiphoneSgImg,
    artistImg: tonyIommiArtist
  },
  {
    id: '07',
    name: 'EVH STRIPED SERIES',
    subtitle: 'EDDIE VAN HALEN',
    artist: 'EDDIE VAN HALEN',
    band: 'Van Halen',
    color: '#991B1B',
    description: 'Featuring Eddie Van Halen signature red-white-and-black striped graphics and direct-mounted humbucker.',
    song: 'Eruption',
    specs: { body: 'Basswood', neck: 'Maple', frets: '22 Jumbo', pickups: 'EVH Wolfgang Humbucking' },
    guitarImg: evhStripedImg,
    artistImg: eddieVanHalenArtist
  }
];