export function isUndfOrEmpty(value: any) {
    return value != undefined
        && typeof value === "string"
        && value !== "";
}