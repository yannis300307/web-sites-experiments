var main_doc = window.top.document.documentElement;
console.log(main_doc);
const script = document.createElement("script")

script.innerHTML = "alert('test')";

main_doc.appendChild(script);