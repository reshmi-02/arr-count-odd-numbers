var arr=[11,12,45,56,45,34,55,89,31,32];
document.write("arr=[11,12,45,56,45,34,55,89,31,32]"+"<br>"+"<br>");
document.write("Numbers of odd numbers are"+"<br>"+"<br>");
count=0;
for (let i=0;i<arr.length;i++){
	if(arr[i]%2!=0){
		count++;
	}
}
document.write(count);