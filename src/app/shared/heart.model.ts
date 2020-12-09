export class Heart {

    public full: boolean
    public urlEmptyHeart: string
    public urlFullHeart: string

    constructor(full: boolean) {
        this.full = full
        this.urlEmptyHeart = '/assets/empty_heart.png'
        this.urlFullHeart = '/assets/full_heart.png'
    }


    public showHeart():string{
        if(this.full){
         return this.urlFullHeart
        }
        else{
            return this.urlEmptyHeart
        }
    }
}