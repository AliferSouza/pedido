export default function Home(dados, url1) {
  let home = "";
  dados.forEach((item) => {
    home += `  
     <div>
     <a href="${`${url1 + "?" + item.Id}`}"  target="" style=" text-decoration:none">
      <img style="border : ${`1px solid ${item.color}`} " class="logo"src="${item.Logo}">   
      <span style=" text-decoration:none; color : ${item.color} ">${item.Nome}</span>
      </div>
      </a>
      `;
  });

  return home;
}