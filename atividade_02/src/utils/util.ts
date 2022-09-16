export function formatPrice(price: number) {
    return price.toFixed(2)
        .replace("", "R$ ")
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export function formatDate(date: Date): string {
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    const week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    
    const day = date.getDate().toLocaleString("pt-BR");
    const weekDay = date.getDay();
    const weekDayName = week[weekDay];
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString();

    return day.concat(" de ").concat(month).concat(" de ").concat(year).concat(` (${weekDayName})`);
}