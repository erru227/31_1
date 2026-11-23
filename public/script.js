const root = ReactDOM.createRoot(document.getElementById("root"));
const buttons = [
   { num: 1, title: "Cat", funct: cat_pic },
   { num: 2, title: "Cloud", funct: cld_pic }, 
   { num: 3, title: "Flower", funct: flw_pic }
];

const lessons = [
   { num: 1, title: "Welcome", date: "Aug 24" },
   { num: 2, title: "Intro to HTML", date: "Aug 26" }, 
   { num: 3, title: "HTML Attributes", date: "Aug 28" }
];

function cat_pic(){
   let new_code = <img src="cat.jpg"></img>
   root.render(<>{page} <br></br> {new_code}</>);
}
function cld_pic(){
   let new_code = <img src="cloud.jpg"></img>
   root.render(<>{page} <br></br> {new_code}</>);
}
function flw_pic(){
   let new_code = <img src="flower.jpg"></img>;
   root.render(<>{page} <br></br> {new_code}</>);
}

function CourseList() {
   return (
      <ol>
         {lessons.map(lesson => 
            <li key={lesson.num}>
               {lesson.title}
            </li>)}
      </ol>
   );
}

function Blist(){
   return (buttons.map(but =>
      <button key={but.num} onClick={but.funct}>{but.title}</button>
   ));
}

let page = <>
   <CourseList/>
   <br />
   <Blist/>
</>;
root.render(page);
