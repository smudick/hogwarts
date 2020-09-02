import houseData from '../../data/houseData';
import houseButton from './houseButton';

const createHouseButtonGroup = () => {
  const houses = houseData.getHouses();
  const domString = `
  <div class="house-button-group">
    ${houses.map((house) => houseButton.createHouseButton(house)).join('')}
  </div>`;
  $('#button-container').html(domString);
  $('body').on('click', '.house-button', houseButton.buttonEventFunction);
};
export default { createHouseButtonGroup };

// import houseData from '../../data/houseData';
// import houseButton from './houseButton';

// const createHouseButtonGroup = () => {
//   const houses = houseData.getHouses();
//   let domString = '<div class="house-button-group">';
//   houses.forEach((house) => {
//     domString += houseButton.createHouseButton(house);
//   });
//   domString += '</div>';

//   $('#button-container').html(domString);

//   $('body').on('click', '.house-button', houseButton.buttonEventFunction);
// };

// export default { createHouseButtonGroup };
