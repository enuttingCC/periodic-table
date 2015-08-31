export default class HomeController {
    constructor(periodicElements) {
        this.searchText = "";
        this.elements = [];

        periodicElements.getElements().then((result) => {
            for(let key in result.data) {
                let element = result.data[key];

                this.elements.push({
                    name: element.name,
                    symbol: element.small,
                    number: element.number,
                    mass: element.molar,
                    row: element.row,
                    column: element.column
                });
            }
        }, (err) => {
            console.log(err);
        });
    }

    showDetails(element) {
        console.log('element', element);
    }

    getPosition(row, column) {
        const width = 100;
        const height = 125;

        return {
            'position': 'absolute',
            'width': `${width}px`,
            'height': `${height}px`,
            'left': `${column * width}px`,
            'top': `${row * height}px`
        };
    }
}

HomeController.$inject = ['periodicElements'];
