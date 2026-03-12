import { Matkasse } from "@/components/MatkasseCard";

export const matkasser: Matkasse[] = [
  {
    slug: "hellofresh",
    navn: "HelloFresh",
    tagline: "Størst utvalg, mest fleksibel levering – og gjerne billigst for nye kunder",
    rating: 4.6,
    prisPerPorsjon: 89,
    ukentligPris: 356,
    leverandor: "HelloFresh",
    badge: "best",
    fordeler: [
      "25+ retter å velge mellom ukentlig",
      "Enkel app, lett å pause",
      "Glutenfrie og kalorismarte valg",
    ],
    ulemper: [
      "Mye emballasje/plast",
      "Standardpris over snittet",
    ],
    affiliateUrl: "https://track.adtraction.com/t/t?a=1234567&as=CHANNEL&t=2&tk=",
    passerFor: "Par og familier som vil ha variasjon uten å planlegge selv",
  },
  {
    slug: "godtlevert",
    navn: "Godtlevert",
    tagline: "Norsk klassiker med kortreiste råvarer og bredt utvalg for alle husholdninger",
    rating: 4.4,
    prisPerPorsjon: 84,
    ukentligPris: 336,
    leverandor: "Godtlevert",
    badge: "fleksibel",
    fordeler: [
      "6 ulike kassestørrelser (1–6 pers.)",
      "80+ retter i uka å velge blant",
      "Fokus på kortreist og norsk mat",
    ],
    ulemper: [
      "Levering ikke overalt i Norge",
      "Appen kan være treg",
    ],
    affiliateUrl: "https://track.adtraction.com/t/t?a=7654321&as=CHANNEL&t=2&tk=",
    passerFor: "Enslige og familier som vil støtte norsk landbruk",
  },
  {
    slug: "adams-matkasse",
    navn: "Adams Matkasse",
    tagline: "Norsk klassiker med sterk fokus på kortreiste råvarer og allergitilpasning",
    rating: 4.3,
    prisPerPorsjon: 91,
    ukentligPris: 364,
    leverandor: "Adams Matkasse",
    fordeler: [
      "Glutenfri og vegetar-alternativer",
      "Norsk kjøtt og fisk i fokus",
      "Bra for allergikere",
    ],
    ulemper: [
      "Litt dyrere per porsjon",
      "Færre retter å velge mellom",
    ],
    affiliateUrl: "https://track.adtraction.com/t/t?a=1122334&as=CHANNEL&t=2&tk=",
    passerFor: "Allergikere og de som setter pris på kortreiste råvarer",
  },
];
