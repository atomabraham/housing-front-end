
//ajouter un point apres 3 chiffres
export function AddThousandSeparator(number) {
    // Convertir le nombre en chaîne de caractères
    const numberString = number.toString();
  
    // Utiliser une expression régulière pour ajouter un point après chaque groupe de trois chiffres
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    return formattedNumber;
}