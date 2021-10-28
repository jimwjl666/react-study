import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import BOXMETELIST from './json/boxMeteList.json'
import ITEMS from './json/items.json'
import ATTRIBUTE from './json/attribute.json'

function getProp() {
  for (let i = 0; i < BOXMETELIST.length; i++) {
    const itemObj = BOXMETELIST[i]
    for (let key in itemObj) {
      if (key !== 'hero') {
        const { id } = itemObj[key]
        const attrs = getAttrsById(id)
        itemObj[key].properties = [...attrs]
      }
    }
  }
}
getProp()
console.log('BOXMETELIST', JSON.stringify(BOXMETELIST))
function getAttrsById(id) {
  const item = ITEMS.find(item => item.id == id)
  const { attributeGroup1, attributeGroup2, attributeGroup3, attributeGroup4, attributeGroup5, attributeGroup6 } = item
  const attrs1 = getAttrsByGroupIds(attributeGroup1.split('|'));
  const attrs2 = getAttrsByGroupIds(attributeGroup2.split('|'));
  const attrs3 = getAttrsByGroupIds(attributeGroup3.split('|'));
  const attrs4 = getAttrsByGroupIds(attributeGroup4.split('|'));
  const attrs5 = getAttrsByGroupIds(attributeGroup5.split('|'));
  const attrs6 = getAttrsByGroupIds(attributeGroup6.split('|'));
  return [attrs1, attrs2, attrs3, attrs4, attrs5, attrs6]
}
function getAttrsByGroupIds([attrGroupId1, attrGroupId2]) {
  //全部选出来
  // console.log(attrGroupId1, attrGroupId2)
  const attrGroupList = ATTRIBUTE.filter(item => item.attributeGroup == attrGroupId1 || item.attributeGroup == attrGroupId2)

  //按照权重降序
  attrGroupList.sort((a, b) => b.weight - a.weight)
  console.log(attrGroupList)
  const len = attrGroupList.length
  const random = parseInt(Math.random() * len)
  const { attribute1, attribute2, attribute3, attribute4, attribute5, attribute6 } = attrGroupList[random]

  const ret = [attribute1, attribute2, attribute3, attribute4, attribute5, attribute6]
  return ret
  //根据权重随机取出一个
  //console.log('attrGroupList:', attrGroupList)

}
// getAttrsByGroupIds([3003, 22])
/* const res = BOXMETELIST.map((item => {
  const idArr = []
  for (let key in item) {
    idArr.push(item[key].id)
  }
  return idArr.join(',')
}))
console.log(res)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
