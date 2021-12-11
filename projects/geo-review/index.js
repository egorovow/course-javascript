import './index.html';
import GeoReview from './geoReview';

new GeoReview();

// let myMap;

// function injectYMapsScript() {
//   return new Promise((resolve) => {
//     const ymapsScript = document.createElement("script");
//     ymapsScript.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
//     document.body.appendChild(ymapsScript);
//     ymapsScript.addEventListener("load", resolve);
//   });
// }

// injectYMapsScript()
//   .then(() => ymaps.ready(init))

// const init = () => {
//   myMap = new ymaps.Map("map", {
//     center: [55.76, 37.64],
//     zoom: 11,
//     controls: []
//   });

//   //   var coords = [
//   //   [55.75, 37.50],
//   //   [55.75, 37.71],
//   //   [55.70, 37.70]
//   // ];
  
//   // var myCollection = new ymaps.GeoObjectCollection({}, {
//   //   preset: 'islands#redIcon', //все метки красные
//   //   draggable: false // и их можно перемещать
//   // });
  
//   // // for (var i = 0; i < coords.length; i++) {
//   // //   myCollection.add(new ymaps.Placemark(coords[i]));
//   // // }
  
//   // coords.forEach(coord => {
//   //   myCollection.add(new ymaps.Placemark(coord));
//   // });

//   // myMap.geoObjects.add(myCollection);

//   // // myMap.geoObjects.events.add('click', function (e) {
//   // //   var targetObject = e.get('target');
//   // //   console.log(targetObject);
//   // // };
  
//   // // При клике на карту все метки будут удалены.
//   // myCollection.getMap().events.add('click', function(e) {
//   //   var myPlacemark = new ymaps.Placemark([55.8, 37.6]);
//   //   myMap.geoObjects.add(myPlacemark);
//   //   var targetObject = e.get('target');
//   //   console.log(targetObject);
//   //   //myCollection.removeAll();
//   // });

//   var myPlacemark;

//   myMap.events.add('click', function (e) {
//     var coords = e.get('coords');

//     // Если метка уже создана – просто передвигаем ее.
//     if (myPlacemark) {
//         myPlacemark.geometry.setCoordinates(coords);
//     }
//     // Если нет – создаем.
//     else {
//         myPlacemark = createPlacemark(coords);
//         myMap.geoObjects.add(myPlacemark);
//         // Слушаем событие окончания перетаскивания на метке.
//         myPlacemark.events.add('dragend', function () {
//             getAddress(myPlacemark.geometry.getCoordinates());
//         });
//     }
//     getAddress(coords);
//   });

//   function createPlacemark(coords) {
//     return new ymaps.Placemark(coords, {
//         iconCaption: 'поиск...'
//     }, {
//         preset: 'islands#blueIcon',
//         draggable: true
//     });
// }

// }

// ymaps.ready(init);

