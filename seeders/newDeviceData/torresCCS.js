const { parsedSite, siteOnlyNames } = require("../location/sites");
const { typeOfSiteOnlyName, typeOfSite } = require("../location/typeOfSite");

const locationCCS = [
    {
        id: '',
        typeOfSiteId: typeOfSite.filter(type => type.name === typeOfSiteOnlyName.SEDE)[0].id,
        siteId: parsedSite.filter(site => site.name === siteOnlyNames.ELROSAL)[0].id,
        name: 'Torre BNC El Rosal',
        subnet: '10.225.1.0'
    },
    {
        id: '',
        typeOfSiteId: typeOfSite.filter(type => type.name === typeOfSiteOnlyName.SEDE)[0].id,
        siteId: parsedSite.filter(site => site.name === siteOnlyNames.BOLEITA)[0].id,
        name: 'Torre BNC Boleita',
        subnet: '10.220.1.0'
    },
    {
        id: '',
        typeOfSiteId: typeOfSite.filter(type => type.name === typeOfSiteOnlyName.SEDE)[0].id,
        siteId: parsedSite.filter(site => site.name === siteOnlyNames.SANBERNARDINO)[0].id,
        name: 'Torre BNC San Bernardino',
        subnet: null
    },
    {
        id: '',
        typeOfSiteId: typeOfSite.filter(type => type.name === typeOfSiteOnlyName.SEDE)[0].id,
        siteId: parsedSite.filter(site => site.name === siteOnlyNames.LACANDELARIACASABERA)[0].id,
        name: 'Torre BNC Casaber',
        subnet: null
    },
]