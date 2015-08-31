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
        const el = document.getElementById(`element-${element.name}`);
        let properties = {};

        if(!element.isActive) {
            element.isActive = true;

            properties = {
                left: `${window.innerWidth / 2 - 100}px`,
                top: `${window.innerHeight / 2 - 125}px`,
                scale: 4,
                rotationY: 180,
                zIndex: 1000
            }
        } else {
            element.isActive = false;

            properties = {
                left: `${element.position.left}px`,
                top: `${element.position.top}px`,
                scale: 1,
                rotationY: 0,
                zIndex: 10
            }
        }

        properties.ease = Elastic.easeInOut.config(1, 1);

        TweenMax.to(el, 1, properties);
    }

    getPosition(el) {
        const width = 100;
        const height = 125;
        const left = el.column * width;
        const top = el.row * height;

        el.position = {
            left,
            top
        };

        return {
            'position': 'absolute',
            'width': `${width}px`,
            'height': `${height}px`,
            'left': `${left}px`,
            'top': `${top}px`
        };
    }
}

HomeController.$inject = ['periodicElements'];
