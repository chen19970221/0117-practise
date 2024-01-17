let data = [{
  name: "大安十二甲東門住宅利用信用購買組合房舍",
  category: "歷史建築",
  type: "宅第",
  Administrative: "臺北市政府"},
  {name: "北投賴氏祖厝",
  category: "歷史建築",
  type: "祠堂",
  Administrative: "臺北市政府"
  },
  {
  name: "迪化街1段192號店屋",
  category: "歷史建築",
  type: "宅第",
  Administrative: "臺北市政府"
  },
  {
  name: "鐵路局北淡線（圓山站）宿舍",
  category: "歷史建築",
  type: "宅第",
  Administrative: "臺北市政府"
  },
  {
  name: "迪化街一段372號店屋",
  category: "歷史建築",
  type: "宅第",
  Administrative: "臺北市政府"
  }]

const list = document.querySelector(".list");
function init(){
  let str = ""
  data.forEach(function(item){
    let content = `<li> 個案名稱：${item.name}，資產類別：${item.category}，資產種類：${item.type}，所屬主管機關：${item.Administrative}</li>`
    str += content
  })
  list.innerHTML = str
}
init()

const typeFilter = document.querySelector(".filter")
typeFilter.addEventListener("click",function(e){
  if(e.target.value === undefined){
    return;
  }

  let str = ""
  data.forEach(function(item){
    if(e.target.value == "所有資料"){
    str+=`<li> 個案名稱：${item.name}，資產類別：${item.category}，資產種類：${item.type}，所屬主管機關：${item.Administrative}</li>`
    }
    if(e.target.value == item.type){
    str+=`<li> 個案名稱：${item.name}，資產類別：${item.category}，資產種類：${item.type}，所屬主管機關：${item.Administrative}</li>`
    }
  })
  list.innerHTML = str
})

const buildName = document.querySelector('.buildName')
const buildCategory = document.querySelector('.buildCategory')
const buildType = document.querySelector('.buildType')
const buildAdministrative = document.querySelector('.buildAdministrative')
const btn = document.querySelector('.btn')


btn.addEventListener("click",function(e){
  let obj = {}
  obj.name = buildName.value
  obj.category = buildCategory.value 
  obj.type = buildType.value
  obj.Administrative = buildAdministrative.value
  data.push(obj)
  console.log(obj)
  console.log(data)
  init()
  obj.buildName = ""
  obj.buildCategory = "" 
  obj.buildType = ""
  obj.buildAdministrative = ""

})