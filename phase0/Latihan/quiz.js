/**
 * Buatlah program untuk mengumpulkan pilihan produk mana saja yang sesuai dengan uang customer dan stock tersedia.
 */

let products = [
    ["baju", 50000, 3],
    ["sepatu", 125000, 2],
    ["tas", 99000, 1],
    ["jam tangan", 525000, 1],
    ["permen", 2500, 0],
];

/**
 * function filterStockAndPrice akan mengembalikan array produk yang sudah difilter berdasarkan harga dan stock
 * 
 *  let input = [
      ['baju', 50000, 3],
      ['sepatu', 125000, 2],
      ['tas', 99000, 1],
      ['jam tangan', 525000, 1],
      ['permen', 2500, 0]
    ];
 *  filterStockAndPrice(input, 60000)
    // return
    [
      ['baju', 50000, 3]
    ]
 */
function filterStockAndPrice(products, money) {
    let productsCanBeBought = []
    for (let i = 0; i<products.length; i++) {
        if (money >= products[i][1] && products[i][2] !== 0) {
            productsCanBeBought.push(products[i])
        }
    }
    return productsCanBeBought
}

/**
 * function formatOutput akan mengembalikan array nama" produk berdasarkan array input
 * 
 *  let input = [
      ['baju', 50000, 3]
    ]
    formatOutput(data)
    // return
    ['baju']
 */
    function formatOutput(data) {
        let productsNameArr = []
        for (let i = 0; i<data.length; i++) {
            productsNameArr.push(data[i][0])
        }
        return productsNameArr
    }

/**
 * function findMatching adalah function utama yang akan mengembalikan array nama" produk yang sesuai dengan uang customer dan stock tersedia.
 *
 * jika input produk tidak diberikan, kembalikan 'invalid input'
 * jika tidak ada produk yang ditemukan, kembalikan 'tidak ada produk yang cocok'
 */
function findMatching(data, money) {
    if (!data || !money) {
        return 'Invalid input!'
    }
    const filteredProducts = filterStockAndPrice(data, money)
    const productsNameThatCanBeBought = formatOutput(filteredProducts)
    if (productsNameThatCanBeBought.length > 0) {
        return productsNameThatCanBeBought
    }
    return 'tidak ada produk yang cocok'
}

console.log(findMatching(products, 100000)); // ['baju', 'tas']
console.log(findMatching(products, 5000)); // 'tidak ada produk yang cocok'
console.log(findMatching()); // 'invalid input








