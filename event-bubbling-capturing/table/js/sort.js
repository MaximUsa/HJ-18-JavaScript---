'use strict';

/*function handleTableClick(event) {

	if (event.target.tagName === 'TH') {
		event.target.dataset.sortBy = 'qwe';


}
  
}
*/


function handleTableClick(event) {
	console.log(event.target.tagName);
	if (event.target.tagName === 'TH') {
	
	(event.target.dataset.dir == '1') ? event.target.dataset.dir = -1 : event.target.dataset.dir = 1; 
	 
	 sortTable(event.target.dataset.propName, event.target.dataset.dir);
	 event.currentTarget.dataset.sortBy = event.target.dataset.propName;

	}

	
}
