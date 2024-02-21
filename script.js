function mincost(arr)
{ 
//write your code here
// return the min cost
  let sum = 0,
    ans = 0;
	let arrLen = arr.length;
  if (arrLen < 2) return arr[0];
while(i<arrLen){
	arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i > 0) { 
      ans += sum;
		arr.splice(0,2,sum);
		break;
	    }
	  }
	}
  return ans;
}

module.exports=mincost;
