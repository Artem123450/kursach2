export function filterInfo({ mass, value }) {
    let filterMass = mass.filter((element) => {
        return element.name
            .toLowerCase()
            .includes(value.toString().toLowerCase());
    });
    return filterMass;
}
