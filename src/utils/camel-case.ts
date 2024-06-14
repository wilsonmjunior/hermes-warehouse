export function toCamelCaseWithFirstUpper(str: string) {
    const camelCaseStr = str
        .toLowerCase() 
        .split(' ') 
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' '); 

    return camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1); 
}
