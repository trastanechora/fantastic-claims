// KASUS DBD LOLOS KLAIM
export const DBD_CASE_1 = {
  patient: {
    name: 'Tn. R',
    age: 18,
    address: 'Sragen, Jawa Tengah',
    id: '323XXX',
  },
  subjective: {
    anamnesis: {
      keluhanUtama: 'demam hari ke 3 ',
      riwayatKeluhan:
        'Demam hari ke 3, makan minum turun, lemes, mual muntah, nyeri kepala, nyeri seluruh badan, ada bintik bintik merah 1 hari ini',
      riwayatPenunjang: 'DM (-) HT (-)',
    },
  },
  objective: {
    pemeriksaanTandaVital: [
      {
        name: 'Heart rate',
        value: '123 x/m',
      },
      {
        name: 'Respiratory rate',
        value: '28 x/m',
      },
      {
        name: 'Body temperature',
        value: '38 deg celcius',
      },
      {
        name: 'Oxygen Saturation',
        value: '97%',
      },
      {
        name: 'Body weight',
        value: '50kg',
      },
    ],
    pemeriksaanFisik: [
      {
        name: 'Kepala',
        value: 'mata cowong -/-',
      },
      {
        name: 'Paru',
        value: 'sdv +/+ rbh -/- wh -/-',
      },
      {
        name: 'Jantung',
        value: 's1s2 reguler, kuat angkat',
      },
      {
        name: 'Abdomen',
        value: 'timpani, BU (+) NT (-) turgor kulit NORMAL, hepatosplenomegali (-)',
      },
      {
        name: 'ekstremitas',
        value: 'dbn CTR<2detik, petekie +',
      },
    ],
    pemeriksaanPenunjang: [
      {
        name: 'Leukosit',
        value: '3.500 (4.500-11.000)',
      },
      {
        name: 'Trombosit',
        value: '87.000 (150.000-145.000)',
      },
      {
        name: 'Hematokrit',
        value: '42 (40-50)',
      },
      {
        name: 'Basofil',
        value: '0 (0-1)',
      },
      {
        name: 'Batang',
        value: '0(2-5)',
      },
      {
        name: 'Eosinofil',
        value: '1 (1-4)',
      },
      {
        name: 'Limfosit',
        value: '11 (22-40)',
      },
      {
        name: 'Monosit',
        value: '4 (4-8)',
      },
      {
        name: 'Segmen',
        value: '84 (36-66)',
      },
      {
        name: 'GDS',
        value: '101 (70-150)',
      },
      {
        name: 'Ureum',
        value: '29.7 (10-50)',
      },
      {
        name: 'Creatinin',
        value: '1.1 (0.7-1.5)',
      },
      {
        name: 'SGOT',
        value: '24 (<35)',
      },
      {
        name: 'SGPT',
        value: '20 (<41)',
      },
      {
        name: 'Serial Trombosit',
        value: '60.000, 90.000, 110.000',
      },
      {
        name: 'Serial Hematokrit',
        value: '42, 44, 40',
      },
      {
        name: 'IGG IGM',
        value: 'Positif',
      },
      {
        name: 'NS 1',
        value: 'Positif',
      },
    ],
  },
  assesment: {
    diagnosis: 'FEBRIS H3 ec DENGUE FEVER',
  },
  plan: ['Inf RL 20 tpm', 'Inj Paracetamol', 'Inj Ondansetron'],
};
