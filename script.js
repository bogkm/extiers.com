let PASSWORD = "4953"; // поменяй обязательно

let players = JSON.parse(localStorage.getItem("players")||"[]");

let filter="all";

function save(){
  localStorage.setItem("players", JSON.stringify(players));
}

function render(){
  let list = document.getElementById("list");
  let search = document.querySelector(".search").value.toLowerCase();
  list.innerHTML="";

  players
  .filter(p=>filter==="all"||p.type===filter)
  .filter(p=>p.name.toLowerCase().includes(search))
  .forEach((p,i)=>{

    list.innerHTML+=`
    <div class="card">
      <div class="rank">${i+1}</div>
      <img class="avatar" src="https://mc-heads.net/avatar/${p.name}">
      <div>${p.name}</div>
      <div class="region ${p.region}">${p.region.toUpperCase()}</div>
    </div>`;
  });
}

function setFilter(f,el){
  filter=f;
  document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));
  el.classList.add("active");
  render();
}

function toggleMenu(){
  document.getElementById("menu").classList.toggle("open");
}

function copyTG(){
  navigator.clipboard.writeText("exetiqueik.t.me");
  alert("Скопировано!");
}

/* ADMIN */
function openAdmin(){
  document.getElementById("admin").style.display="flex";
}

function closeAdmin(){
  document.getElementById("admin").style.display="none";
}

function login(){
  let pass=document.getElementById("adminPass").value;
  if(pass===PASSWORD){
    document.getElementById("adminContent").style.display="block";
  } else alert("Неверный пароль");
}

function addPlayer(){
  let name=document.getElementById("name").value;
  let tiers=document.getElementById("tiers").value.split(",");
  let type=document.getElementById("type").value;
  let region=document.getElementById("region").value;

  players.push({name,tiers,type,region});
  save();
  render();
}

function clearPlayers(){
  players=[];
  save();
  render();
}

render();
