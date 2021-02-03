'use strict';

var studentForm=document.getElementById('gradeForm');

var stdTable=document.getElementById('studentTable');


Gradres.prototype.allgrades=[];
function Gradres(name,course){
this.name = name;
this.course = course;
this.stdgrad=Math.floor(Math.random() * 100);
// console.log(this.stdgrad);
Gradres.prototype.allgrades.push(this);
}


Gradres.prototype.render = function (){
var dataRow=document.createElement('tr');
stdTable.appendChild(dataRow);

var nameData= document.createElement('td');
nameData.textContent=this.name;
dataRow.appendChild(nameData);

var gradeData= document.createElement('td');
gradeData.textContent=this.stdgrad;
dataRow.appendChild(gradeData);


var courseData= document.createElement('td');
courseData.textContent=this.course;
dataRow.appendChild(courseData);




}

if (localStorage.getItem('studentobject')){
    var studentArray=JSON.parse(localStorage.getItem('studentobject'));
    for (var i =0;i<studentArray.length;i++){
new Gradres(studentArray[i].name,studentArray[i].course);

    }

}
createTableStudent();


studentForm.addEventListener('submit',addStudent);

function addStudent(event){
    event.preventDefault();

    var stdName=event.target.studName.value;
    console.log(event.target.studName.value);

    var stdCourse=event.target.courses.value;
    console.log(event.target.courses.value);

   var studentobj= new Gradres(stdName,stdCourse);
 console.log(studentobj);

 localStorage.setItem('studentobject',JSON.stringify(Gradres.prototype.allgrades));

 studentobj.render();




}



function createTableStudent(){

    stdTable.innerHTML="";

createHeader();

for (var i =0;i<Gradres.prototype.allgrades.length;i++){
    Gradres.prototype.allgrades[i].render();


}



}
function createHeader() {

    var headRow=document.createElement('tr');
    stdTable.appendChild(headRow);


    var sname=document.createElement('th');
    sname.textContent='Student Name';
    headRow.appendChild(sname);

    var sgrade=document.createElement('th');
    sgrade.textContent='Student Grade';
    headRow.appendChild( sgrade);

    var scourse=document.createElement('th');
    scourse.textContent='Student Course';
    headRow.appendChild(scourse);

    
}
createTableStudent();