const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const citiesArr = cities.map(city => {
    if(city.isVisited) {
        return `${city.name} - visitada`;
    } else {
        return city.name;
    }
})

console.log(citiesArr);