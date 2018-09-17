
function tab(a,b){
	var aNav = document.getElementById(a).getElementsByTagName('li');
	var aList = document.getElementById(b).getElementsByTagName('li');
	aa(aNav,aList)
}

function aa(c,d){
	for(var i=0;i<c.length;i++){
		c[i].index = i;
		c[i].onclick = function(){
			for(var i=0;i<c.length;i++){
				c[i].className = '';
				d[i].style.display = 'none';
			}
			this.className = 'active';
			d[this.index].style.display = 'block';
		}
	}
}
