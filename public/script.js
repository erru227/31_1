const root = ReactDOM.createRoot(document.getElementById("root"));
const buttons = [
   { num: 1, title: "Cat", funct: cat_pic },
   { num: 2, title: "Cloud", funct: cld_pic }, 
   { num: 3, title: "Flower", funct: flw_pic }
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

function Blist(){
   return (buttons.map(but =>
      <button key={but.num} onClick={but.funct}>{but.title}</button>
   ));
}

let page = <>
   <Blist/>
</>;
root.render(page);
