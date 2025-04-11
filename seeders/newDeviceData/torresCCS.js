const { parsedSite, siteOnlyNames } = require("../location/sites");
const { typeOfSiteOnlyName, typeOfSite } = require("../location/typeOfSite");

const locationCCS = [
    {
        id: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3',
        typeOfSiteId: typeOfSite.filter(type => type.name === typeOfSiteOnlyName.SEDE)[0].id,
        siteId: parsedSite.filter(site => site.name === siteOnlyNames.ELROSAL)[0].id,
        name: 'Torre BNC El Rosal',
        subnet: '10.225.1.0'
    },
    {
        id: 'f42dfa7d-bf35-4aec-91ce-906f81166e27',
        typeOfSiteId: typeOfSite.filter(type => type.name === typeOfSiteOnlyName.SEDE)[0].id,
        siteId: parsedSite.filter(site => site.name === siteOnlyNames.BOLEITA)[0].id,
        name: 'Torre BNC Boleita',
        subnet: '10.220.1.0'
    },
    {
        id: 'edcaf3d7-172e-40d9-94dd-93096ac3af56',
        typeOfSiteId: typeOfSite.filter(type => type.name === typeOfSiteOnlyName.SEDE)[0].id,
        siteId: parsedSite.filter(site => site.name === siteOnlyNames.SANBERNARDINO)[0].id,
        name: 'Torre BNC San Bernardino',
        subnet: null
    },
    {
        id: '0fa6871c-408f-43c4-8fd1-2029bede7a0f',
        typeOfSiteId: typeOfSite.filter(type => type.name === typeOfSiteOnlyName.SEDE)[0].id,
        siteId: parsedSite.filter(site => site.name === siteOnlyNames.LACANDELARIACASABERA)[0].id,
        name: 'Torre BNC Casabera',
        subnet: null
    },
]
module.exports = { locationCCS }