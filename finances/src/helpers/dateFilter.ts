export const getCurrentMonth  = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`
}   

//month no JS começa na posição 0, por isso o +1 no getMonth.