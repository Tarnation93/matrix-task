
 // generate random matrix
 class matrix  {
    constructor (row,column) {
        this.column = column;
        this.rowNum = row;
        this.matrixGenerator()
    }
    matrixGenerator() {
        const row = [];
        
        for (let i = 0; i< this.rowNum; i++) {
            const col = []
            for (let j = 0; j < this.column ; j++) {
                const el = Math.round(Math.random());
                col.push({
                    val:el,
                    checked:false
                })    
            } 
            row.push(col)
           
        } this.data = row
    }
    //just a simple function to help with syntax 
    getData(i,j) {
        return this.data[i][j]
       
    }
    //getting each indifidual element
        getEachEl(findConnected) {
        this.data.forEach((elArr, i) => {
            elArr.forEach((el,j) => {
               findConnected(el, i, j)
             });
        });
    }

    //checking which neighbour elements can we add to our collection array,
    // using recursion
    logic(i, j, collection) {
    this.getData(i, j).checked = true;
    collection.push(`${i}x${j}`);
    var canWeGoLeft =
      j - 1 >= 0 &&
      this.getData(i, j - 1).checked === false &&
      this.getData(i, j - 1).val === 1;

    if (canWeGoLeft) {
      this.logic(i, j - 1, collection);
    }
    var canWeGoRight =
      j + 1 <= this.column - 1 &&
      this.getData(i, j + 1).checked === false &&
      this.getData(i, j + 1).val === 1;
    if (canWeGoRight) {
      this.logic(i, j + 1, collection);
    }
    var canWeGoUp =
      i - 1 >= 0 &&
      this.getData(i - 1, j).checked === false &&
      this.getData(i - 1, j).val === 1;
    if (canWeGoUp) {
      this.logic(i - 1, j, collection);
    }
    var canWeGoDown =
      i + 1 <= this.rowNum - 1 &&
      this.getData(i + 1, j).checked === false &&
      this.getData(i + 1, j).val === 1;
    if (canWeGoDown) {
      this.logic(i + 1, j, collection);
    }
  }

    solving () {
        let allSolutions = [];
        this.getEachEl((cell,i,j) => {
            //getting each element of matrix with our function getEachEl
                if(cell.val === 1) {
                    var collection = []
                    //using logic func to fill collection array
                    this.logic(i, j, collection)
                    //pushing into final array from collection array where each individual island is held
                    allSolutions.push(collection)
                }
                
        })
        return allSolutions;
    }

}
const matrica = new matrix(4,6)
let s = "";
matrica.data.forEach(el => {
  el.forEach(el => {
    s += el.val;
  })
  console.log(s);
  s = "";
});

matrica.solving()



