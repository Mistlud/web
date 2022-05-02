let btn = document.querySelector('#addbtn');
btn.addEventListener('click', () => {
  let frm = document.forms.frm;

  frm.action = "StudnetGetServlet";
  frm.method = "post";
  frm.cmd.value = "add";

  frm.submit();
});

let delbtn = document.getElementById(delbtn);
delbtn.addEventListener('click', ()=>{
  let frm = document.forms.frm;

  frm.action = "StudnetGetServlet";
  frm.method = "post";
  frm.cmd.value = "del";

  frm.submit();
})


