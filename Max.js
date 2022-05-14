let a=[1,5,88,33,414,55,6747,87]
let max=0
for (i=0;i<a.length;i++){
    if (a[i+1]>a[i]){
        max = a[i+1]
    }
    console.log(max)
}document.write(max)
