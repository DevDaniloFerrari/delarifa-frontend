export class Curriculum {
    public name: string;
    public description: string;
    public linkedin: string;
    public github: string;
    public technologies: Array<string>;

    constructor(
        name: string,
        description: string,
        linkedin: string,
        github: string,
        technologies: Array<string>
    ) {
        this.name = name;
        this.description = description;
        this.linkedin = linkedin;
        this.github = github;
        this.technologies = technologies
    }

}