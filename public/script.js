const root = ReactDOM.createRoot(document.getElementById("root"));

function CourseList() {
   const lessons = [
      { num: 1, title: "Welcome" },
      { num: 2, title: "Intro to HTML" }, 
      { num: 3, title: "HTML Attributes" }
   ];

   return (
      <ol>
         {lessons.map(lesson => 
            <li key={lesson.num}>
               {lesson.title}
            </li>)}
      </ol>
   );
}
root.render(<CourseList/>);
