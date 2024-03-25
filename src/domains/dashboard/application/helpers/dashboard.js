export const getMonthName = (number) => {
    const months = [
      'Ene', 'Feb', 'Mar', 'Abr',
      'May', 'Jun', 'Jul', 'Ago',
      'Sep', 'Oct', 'Nov', 'Dic'
    ];
  
    if (number >= 1 && number <= 12) {
      return months[number - 1];
    } 
      return 'Número de mes inválido';
    
  }
  

  export default {}