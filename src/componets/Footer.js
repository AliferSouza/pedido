export default function Footer(data, cardapioColor) {
  
  let footer = ``;
  data.forEach((element) => {
    footer += `
    <h5 style="text-align: center; color: ${cardapioColor}; font-size: 2rem">
    ${element.Nome}
    </h5>
   `;
  });
  return footer;
}
