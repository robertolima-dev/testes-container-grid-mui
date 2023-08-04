export const name = (name: string): string => {
    return name.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())
}

export const email = (email: string): string => {
    return email ? email.toLowerCase().trim() : ''
}