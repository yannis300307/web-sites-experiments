var main_doc = window.top.document.documentElement;
const script = document.createElement("script")

script.innerHTML = "alert('test')";

main_doc.appendChild(script);