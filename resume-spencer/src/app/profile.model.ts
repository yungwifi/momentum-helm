export default class Profile {
    firstName: string;
    lastName: string;
    title: string;
    experiences: string[];

    constructor(firstName: string, lastName: string, title: string, experiences: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.experiences = experiences;
    }
}

export const profiles = [
    new Profile('spencer', 'merryman', 'number swag generator', ['swag MVP']),
    new Profile('Lego', 'merryman', 'dog', ['dog MVP']),
    new Profile('jules', 'fig newton', 'spencers girlfriend', ['NUMBER ONE GF'])
];