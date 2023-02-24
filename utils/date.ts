export const getDayy = () => {
    const date = new Date(Date.now());
    const day = date.getDay();
    
    const week = [
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi',
        'Dimanche'
    ]

    return week[day]
}