// class CourseList{
//     constructor(courseList){
//         this.courseList = courseList;
//     }

//     addCourse(courseName, department, number){
//         let button = new Course("courseName","dept",123);
//     }
// }
class CourseButton{
    courseName;
    department;
    number;
    height = 20;
    width = 200;
    clickCount = 0;

    constructor(courseName, department, number, hierarchy,prereqs){
        this.courseName = courseName;
        this.department = department;
        this.number = number;
        this.hierarchy = hierarchy;
        this.prereqs=prereqs;
    }

    createButton(){
        let button = document.createElement("button");
        // button.className = "button"+this.hierarchy;
        button.setAttribute("id",this.courseName)
        let buttoncourseName = document.createTextNode(this.courseName);
        button.appendChild(buttoncourseName);
        let colName = "col"+this.hierarchy;
        // console.log(colName);
        let element = document.getElementById(colName);
        element.appendChild(button);
        if(this.prereqs.length == 0){
            return;
        }
        button.setAttribute("clickCount",0);
        button.setAttribute("prereq",this.prereqs);
        button.addEventListener("click", showNextRequisites);
        let hierarchyNext = this.hierarchy+1;
        // let nameNext = this.courseName+this.hierarchy;
        // console.log(this.prereqs);
        function showNextRequisites(){
            var myArray = button.getAttribute("prereq").split(",");
            var reqs = [];
            var temp;
            for(var i = 0; i < myArray.length; i++){
                temp = new Course(myArray[i]);
                reqs.push(temp);
            }
            if(button.getAttribute("clickCount") == 0){
                for(var i = 0; i < reqs.length; i++){
                    let nextCourse = new CourseButton(reqs[i],"dept2",123,hierarchyNext,[]);
                    nextCourse.createButton();
                    let buttonNext = document.getElementById(reqs[i]);
                    button.setAttribute("clickCount",1);
            }
            }
            else{
                for(var i = 0; i < reqs.length; i++){
                    let buttonDestroy = document.getElementById(reqs[i]);
                    buttonDestroy.remove();
                    button.setAttribute("clickCount",0);
                }
                
            }            
        }
    }
    
}

//add this to somewhere

// var col = vertices[0].printPrerequisites();
// console.log(col);
// var course = new CourseButton("og","dept",123,0,col);
// course.createButton();

