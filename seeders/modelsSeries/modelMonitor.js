
const {brandsData, brandOnlyName } = require("../brandData/brands")
const {categoryData, categoryOnlyNames} = require("../categoryData/categoryData")

const modelName = {
    '933': '933',
    '9227': '9227',
    '9417': '9417',
    N936SW: 'N936SW',
    S2021: 'S2021',
    S1933: 'S1933',
    L1851W: 'L1851W',
    V193: 'V193',
    LE1711: 'LE1711',
    L1710: 'L1710',
    D186WA: 'D186WA',
    L197WA: 'L197WA',
    L1711: 'L1711pC',
    L1718S: 'L1718S',
    L177WSB: 'L177WSB',
    W1943: 'W1943SE',
    S19A10N: 'S19A10N',
    S23B550: 'SyncMaster S23B550',
    '910N': '910N',
    SME1920N: 'SME1920N',
    '73NW': '73NW',
    DP2VGAV226: 'DP2VGA V226',
    '1950W': '1950W',
    '2070W': '2070W',
    '716WX': '716Wx',
    '913W': '913W',
    LM740E: 'LM740e',
    LM742: 'LM742',
    GW2780: 'GW2780',
    SE178WFP: 'SE178WFP',
    E221C: 'E221c',
    L2105TM: 'L2105tm',
    L2208W: 'L2208w',
    LA1751: 'LA1751',
    LE2201W: 'LE2201w',
    LV1911: 'LV1911',
    N246V: 'N246v',
    P22VAG4: 'P22va G4',
    P24VG4: 'P24v G4',
    V193B: 'V193b',
    V194: 'V194',
    V214A: 'V214a',
    V24I: 'V24i',
    L171: 'L171',
    T115: 'T115',
    E1922: 'E1922 Wide',
    E2054A: 'E2054A',
    L174: 'L174',
    L191: 'L191',
    L192P: 'L192p',
    L197: 'L197 Wide',
    LS1922WA: 'LS1922wA',
    '19EN33': '19EN33',
    '26LC2R-MJ': '26LC2R-MJ',
    E2242: 'E2242',
    MP59G: 'MP59G',
    S19B300: 'S19B300',
    S22D300: 'S22D300',
    S23B550: 'S23B550',
    SMB1930N: 'SMB1930N',
    SMB2230N: 'SMB2230N',
    SMT27A550: 'SMT27A550',
    T22C301: 'T22C301',
    T27B550: 'T27B550',
    T27C730: 'T27C730',
    SE32HYT: 'SE32HYT',
    'VE710B-2': 'VE710b-2',
  }

const modelMonitor = [
    { 
        id: '41f8efa2-4f2c-4c37-af9e-89b837226b90', 
        name: 'N936SW', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.AOC)[0].id, 
        screenSize: 18.5, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'fddc4fa1-d858-486f-bc67-3d13d7916bdc', 
        name: 'S2021', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.COMPAQ)[0].id, 
        screenSize: 20, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'e8f9b7c3-235a-490e-86fc-47d1790d7269', 
        name: 'S1933', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 18.5, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'ba307a95-6471-4a96-849b-b2619d365ce2', 
        name: 'L1851W', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 18.5, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '6d8386d3-0157-4dbd-a277-d5d8747736aa', 
        name: 'V193', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 19, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'd60bb7d5-0e9a-49b6-99c3-2e4fd9d47edf', 
        name: 'LE1711', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 17, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '246b7822-3a1a-4e01-85da-ac15c5f1dbf1', 
        name: 'L1710', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 17, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '5b06266f-89d8-4bba-9cd8-77f7f70260bd', 
        name: '9417', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.IBM)[0].id, 
        screenSize: 17, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'bf5b0633-0150-4d48-ab00-8fe4324a6bbf', 
        name: 'D186WA', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 18.5, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '80ac0abe-1d7b-4d0b-b025-d24d6c556b8f', 
        name: 'L197WA', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 19, 
        hasDVI: true, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '1c972fc0-c2b3-4286-9eb4-f359a346ebf2', 
        name: '9227', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 17, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'e4f9ec71-c4ba-444e-9d5b-b4eb6f11dac1', 
        name: 'L1711pC', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 17, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '12b8a855-82fd-42ff-82d5-2275baad9b8d', 
        name: 'L1718S', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 17, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '70a8dc15-8e65-431c-8366-81fecf3144b1', 
        name: 'L177WSB', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LG)[0].id, 
        screenSize: 17, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '7e31f965-dd8a-4e04-8a8c-053bfeba74a4', 
        name: 'W1943SE', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LG)[0].id, 
        screenSize: 18.5, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '2f5fe84f-4550-4da6-ad14-db31ccd54ea6', 
        name: 'S19A10N', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 18.5, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'e6c078b1-c15a-4fc8-9c1b-d7fd1f93782d', 
        name: 'SyncMaster S23B550', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 18.5, 
        hasDVI: false, 
        hasHDMI: true, 
        hasVGA: true 
    },
    { 
        id: '2a79ca84-4029-4f4b-a635-0cda81682315', 
        name: '910N', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 19, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'fa27fec3-d49b-484b-a751-c07b48387883', 
        name: 'SME1920N', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 19, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '2cd3b34d-a0a2-4fb5-8528-b5926cca2677', 
        name: '73NW', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 17, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '0e8cf793-3544-49e7-a13e-f91161226c45', 
        name: '933', 
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 18.5, 
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    
    { 
        id: 'b20946d1-904a-43af-af6c-bc4f3aa03521', 
        name: 'DP2VGA V226',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.ACER)[0].id, 
        screenSize: 21.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '6fb76c76-e9ac-4bd3-9d03-72f0d94051c3', 
        name: '1950W',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.AOC)[0].id, 
        screenSize: 15.6,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'e54aaf88-d7ff-4343-81eb-46c0f3dbec46', 
        name: '2070W',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.AOC)[0].id, 
        screenSize: 19.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '594dd616-5e8f-4278-a13c-2acf4044ac5d', 
        name: '716Wx',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.AOC)[0].id, 
        screenSize: 17,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'c870b31b-177a-40c8-9ac4-99227cbbcb6c', 
        name: '913W',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.AOC)[0].id, 
        screenSize: 19,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '58f72e3a-2e75-49fd-a123-c747178e42e2', 
        name: 'LM740e',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.AOC)[0].id, 
        screenSize: 17,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '1572e269-7aa6-40f5-9d03-8f8b01c663c1', 
        name: 'LM742',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.AOC)[0].id, 
        screenSize: 17,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '58299236-f5a9-4ae7-9d3e-8e4a602d0bc6', 
        name: 'GW2780',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.BENQ)[0].id, 
        screenSize: 27,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '371394bc-4eb8-4a50-bd27-bdd95f4d6cc7', 
        name: 'SE178WFP',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.DELL)[0].id, 
        screenSize: 17,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '8ec73608-8207-4cba-b0df-1e0f99979ce4', 
        name: 'E221c',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 21.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '186934c6-c77f-438e-b5e4-6088d3b69e8f', 
        name: 'L2105tm',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 21.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '2d8575a7-7cf8-459b-a32c-d555949a466b', 
        name: 'L2208w',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 22,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '1fb2bfab-644a-4179-9989-01caec1e3007', 
        name: 'LA1751',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 17,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'b6d932a5-baae-48b5-a02e-2489578b0232', 
        name: 'LE2201w',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 22,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '68b766c9-09a5-43bd-ad40-9c976685fc16', 
        name: 'LV1911',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 18.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '8cbc4c02-d66b-4966-a91a-bf393a0632ac', 
        name: 'N246v',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 23.8,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '8b639783-676d-4893-b4a1-67acf81359a8', 
        name: 'P22va G4',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 21.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '2350281f-4ada-4086-98b4-74e6cf56515e', 
        name: 'P24v G4',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 23.8,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '4f3e73af-a617-4cd1-a335-33df498cb637', 
        name: 'V193b',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 18.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'fc4ed228-5812-4c1d-8b26-3c7e1d203c25', 
        name: 'V194',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 18.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '011938b9-b22a-45ee-a873-83a5f781cf85', 
        name: 'V214a',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 20.7,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '756bccd2-5c6b-4830-bd03-cd3220b41c4b', 
        name: 'V24i',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id, 
        screenSize: 24,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '268a1c98-1300-478e-89d7-37e6cd553f34', 
        name: 'L171',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.IBM)[0].id, 
        screenSize: 17,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '6e363695-6bbc-4502-b546-c907bc92eef3', 
        name: 'T115',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.IBM)[0].id, 
        screenSize: 15,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '1184c3cf-428f-4c32-99ae-4820cf971ab6', 
        name: 'E1922 Wide',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 18.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '97623dae-fb32-493a-adfe-55e5bf43bb87', 
        name: 'E2054A',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 19.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'dd7cdf63-c9af-4311-91cd-898f4a604bc0', 
        name: 'L174',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 17,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '33225744-8460-43e2-8c4e-1730127a972d', 
        name: 'L191',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 19,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'a5dc3dbb-8ab3-4512-a9f2-c968c37a8573', 
        name: 'L192p',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 19,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '4e111e67-593c-4749-8fa1-82abadcb319c', 
        name: 'L197 Wide',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 19,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '7f1afe39-7928-4e1b-86d3-b7d80dc69696', 
        name: 'LS1922wA',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id, 
        screenSize: 18.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '34b97c2c-3fb7-4b94-8040-06af00b78f47', 
        name: '19EN33',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LG)[0].id, 
        screenSize: 18.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '0ea29388-5942-409f-adc8-35564e1c0c14', 
        name: '26LC2R-MJ',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LG)[0].id, 
        screenSize: 26,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '77a08541-9807-4f1b-982d-892d79146ab9', 
        name: 'E2242',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LG)[0].id, 
        screenSize: 21.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '0f636b37-63c7-4b99-809e-a34b8df9d208', 
        name: 'MP59G',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LG)[0].id, 
        screenSize: 24,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '6ee9c4d0-3989-478c-88a7-b8f628b0a020', 
        name: 'S19B300',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 19,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '2dcaf18e-9106-4a0a-9e6d-04e77c60480e', 
        name: 'S22D300',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 21.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'f5ad2a0b-c032-4a39-836f-06969607e21c', 
        name: 'S23B550',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 23,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '7d875817-1b0e-4767-a2b7-6ae05ca4477c', 
        name: 'SMB1930N',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 18.5,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'f54b1da1-3d5c-4164-984b-5373ad9e6887', 
        name: 'SMB2230N',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 22,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '1b36b6a3-c53a-4cc2-93ad-7cc938ecfadd', 
        name: 'SMT27A550',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 27,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '19b6c9e3-044b-47a1-b2af-85d7ad2e41dc', 
        name: 'T22C301',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 22,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'e314e064-1e9a-4340-b443-c96770373500', 
        name: 'T27B550',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 27,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: 'b2bb47dd-e243-4b10-87fc-0523e5642391', 
        name: 'T27C730',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SAMSUNG)[0].id, 
        screenSize: 27,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '4eb4b703-04f5-4a17-8371-57de1bce4f36', 
        name: 'SE32HYT',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.SEIKI)[0].id, 
        screenSize: 32,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
    { 
        id: '29d22ee6-a348-4cbd-93d7-eef89e346c08', 
        name: 'VE710b-2',
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.MONITORES)[0].id, 
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.VIEWSONIC)[0].id, 
        screenSize: 17,
        hasDVI: false, 
        hasHDMI: false, 
        hasVGA: true 
    },
  ]
  
  module.exports = { modelMonitor, modelName }