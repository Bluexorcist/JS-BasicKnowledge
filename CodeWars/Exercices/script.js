

const cannonsReady = (gunners) => Object.entries(gunners)
.some(e => e[1] === 'nay') ? console.log('Shiver me timbers!') : console.log('Fire!');     
var a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'},
b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};




cannonsReady(b);