export default function joinClasses(...allNames: string[]) {
    return allNames
        .filter(s => s)
        .join(',')
        .replace(new RegExp(',', 'g'), ' ');
}
