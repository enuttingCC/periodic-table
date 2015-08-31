export default class HomeController {
    constructor(periodicElements) {
        periodicElements.getElements().then((result) => {
            this.elements = result;
        }, (err) => {
            console.log(err);
        });
    }

    getPosition(row, column) {

        const width = 120;
        const height = 160;

        var blar = {
            'position': 'absolute',
            'left': `${column * width}px`,
            'top': `${row * height}px`
        };

        return blar;
    }
}

HomeController.$inject = ['periodicElements'];
