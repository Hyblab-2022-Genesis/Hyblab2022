class Source extends Observable {
    
    constructor(name_institut, start, end, sponsor, link){
        super();
        this.name_institut = name_institut;
        this.start = start;
        this.end = end;
        this.sponsor = sponsor;
        this.link = link;
    }
}

module.exports = Source;