export default function jc(...allNames: string[]) {
    return allNames.filter(s => s).join(' ');
}
