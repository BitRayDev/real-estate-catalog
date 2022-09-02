export const formatAddress = (city, street, houseNumber) => {
    return `г. ${city}, ул. ${street}, д. ${houseNumber}`
}

export const formatDate = (date) => {
    return new Date(date).toLocaleString();
}