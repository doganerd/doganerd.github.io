namespace Haushaltshilfe {


    interface Item {
        name: string;
        price: number;
    }

    interface Data {
        [category: string]: Item[];
    }

    let data: Data {
        field1:  [
            { name: "Milk", price: 1.75},
        ]
    }

}